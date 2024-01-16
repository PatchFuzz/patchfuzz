

let g = newGlobal({newCompartment: true});
g.eval(`
  function* f() {
    yield 1;
  }
`);















function test(ttl) {
  let dbg = new Debugger(g);
  let exiting = false;  
  let done = false;  
  let reported = false;  

  dbg.onEnterFrame = frame => {
    assertEq(frame.callee.name, "f");
    dbg.onEnterFrame = undefined;
    frame.onStep = () => {
      if (ttl == 0) {
        exiting = true;
        
        
        
        return {return: "ponies"};
      }
      ttl--;
    };
    frame.onPop = completion => {
      if (!exiting)
        done = true;
    };
  };

  dbg.uncaughtExceptionHook = (exc) => {
    
    
    assertEq(exc instanceof TypeError, true);
    reported = true;
    return {throw: "FAIL"};  
  };

  let result;
  let caught = undefined;
  try {
    result = g.f();
  } catch (exc) {
    caught = exc;
  }

  if (done) {
    assertEq(reported, false);
    assertEq(result instanceof g.f, true);
    assertEq(caught, undefined);
  } else {
    assertEq(reported, true);
    assertEq(caught, "FAIL");
  }

  dbg.enabled = false;
  return done;
}

for (let ttl = 0; !test(ttl); ttl++) {}
