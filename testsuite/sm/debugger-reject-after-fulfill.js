











function searchLastBreakpointBeforeReturn(declCode, callCode) {
  const g = newGlobal({ newCompartment: true });
  const dbg = new Debugger(g);
  g.eval(declCode);

  let hit = false;
  let offset = 0;
  dbg.onEnterFrame = function(frame) {
    if (frame.callee && frame.callee.name == "f") {
      frame.onStep = () => {
        if (!g.returning) {
          return undefined;
        }

        offset = frame.offset;
        return undefined;
      };
    }
  };

  g.eval(callCode);

  drainJobQueue();

  assertEq(offset != 0, true);

  return offset;
}

function testWithoutAwait() {
  const declCode = `
  var returning = false;
  async function f() {
    return (returning = true, "expected");
  };
  `;

  const callCode = `
  var p = f();
  `;

  const offset = searchLastBreakpointBeforeReturn(declCode, callCode);

  const g = newGlobal({ newCompartment: true });
  const dbg = new Debugger(g);
  g.eval(declCode);

  let onPromiseSettledCount = 0;
  dbg.onPromiseSettled = function(promise) {
    onPromiseSettledCount++;
    
    assertEq(promise.promiseState, "fulfilled");

    
    if (onPromiseSettledCount == 1) {
      assertEq(promise.promiseValue, "expected");
    }
  };

  let hitBreakpoint = false;
  dbg.onEnterFrame = function(frame) {
    if (frame.callee && frame.callee.name == "f") {
      dbg.onEnterFrame = undefined;
      frame.script.setBreakpoint(offset, {
        hit() {
          hitBreakpoint = true;
          return { throw: "unexpected" };
        }
      });
    }
  };

  enableLastWarning();

  g.eval(`
  var fulfilledValue;
  var rejected = false;
  `);

  g.eval(callCode);

  
  assertEq(hitBreakpoint, true);

  const warn = getLastWarning();
  assertEq(warn.message,
           "unhandlable error after resolving async function's promise");
  clearLastWarning();

  
  
  g.eval(`
  p.then(x => {
    fulfilledValue = x;
  }, e => {
    rejected = true;
  });
  `);

  
  drainJobQueue();

  assertEq(g.fulfilledValue, "expected");
  assertEq(onPromiseSettledCount >= 1, true);
}

function testWithAwait() {
  const declCode = `
  var resolve;
  var p = new Promise(r => { resolve = r });
  var returning = false;
  async function f() {
    await p;
    return (returning = true, "expected");
  };
  `;

  const callCode = `
  var p = f();
  `;

  const resolveCode = `
  resolve("resolve");
  `;

  const offset = searchLastBreakpointBeforeReturn(declCode,
                                                  callCode + resolveCode);

  const g = newGlobal({newCompartment: true});
  const dbg = new Debugger(g);
  g.eval(declCode);

  let onPromiseSettledCount = 0;
  dbg.onPromiseSettled = function(promise) {
    onPromiseSettledCount++;

    
    assertEq(promise.promiseState, "fulfilled");

    
    if (onPromiseSettledCount == 2) {
      assertEq(promise.promiseValue, "expected");
    }
  };

  let hitBreakpoint = false;
  dbg.onEnterFrame = function(frame) {
    if (frame.callee && frame.callee.name == "f") {
      dbg.onEnterFrame = undefined;
      frame.script.setBreakpoint(offset, {
        hit() {
          hitBreakpoint = true;
          return { throw: "unexpected" };
        }
      });
    }
  };

  enableLastWarning();

  g.eval(`
  var fulfilledValue1;
  var fulfilledValue2;
  var rejected = false;
  `);

  g.eval(callCode);

  assertEq(getLastWarning(), null);

  
  
  g.eval(`
  p.then(x => {
    fulfilledValue1 = x;
  }, e => {
    rejected = true;
  });
  `);

  g.eval(resolveCode);

  
  drainJobQueue();

  
  
  assertEq(hitBreakpoint, true);

  const warn = getLastWarning();
  assertEq(warn.message,
           "unhandlable error after resolving async function's promise");
  clearLastWarning();

  assertEq(g.fulfilledValue1, "expected");
  assertEq(g.rejected, false);

  
  
  g.eval(`
  p.then(x => {
    fulfilledValue2 = x;
  }, e => {
    rejected = true;
  });
  `);

  
  drainJobQueue();

  assertEq(g.fulfilledValue2, "expected");
  assertEq(g.rejected, false);
  assertEq(onPromiseSettledCount >= 3, true);
}

testWithoutAwait();
testWithAwait();
