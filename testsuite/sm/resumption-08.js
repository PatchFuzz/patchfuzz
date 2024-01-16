


var g = newGlobal({newCompartment: true});
var dbg = new Debugger;

function reset() {
  dbg.onEnterFrame = undefined;
  dbg.onDebuggerStatement = undefined;
  dbg.addDebuggee(g);
  g.eval("(" + function test() {
    for (i = 0; i < 5; i++)
      f(42);
  } + ")();");
}

g.eval("" + function f(d) {
  return g(d);
});

g.eval("" + function g(d) {
  debugger;
  return d;
});

function testResumptionValues(handlerSetter) {
  
  reset();
  handlerSetter(undefined);
  assertEq(g.eval("(" + function test() { return f(42); } + ")();"), 42);

  
  reset();
  handlerSetter({ return: "not 42" });
  assertEq(g.eval("(" + function test() { return f(42); } + ")();"), "not 42");

  
  reset();
  handlerSetter({ throw: "thrown 42" });
  try {
    g.eval("(" + function test() { return f(42); } + ")();");;
  } catch (e) {
    assertEq(e, "thrown 42");
  }
}


testResumptionValues(function (resumptionVal) {
  dbg.onEnterFrame = function (frame) {
    if (frame.older) {
      if (frame.older.older) {
        dbg.removeDebuggee(g);
        return resumptionVal;
      }
    }
  };
});


testResumptionValues(function (resumptionVal) {
  dbg.onEnterFrame = function (frame) {
    if (frame.older) {
      if (frame.older.older) {
        frame.onPop = function () {
          dbg.removeDebuggee(g);
          return resumptionVal;
        };
      }
    }
  };
});


testResumptionValues(function (resumptionVal) {
  dbg.onDebuggerStatement = function (frame) {
    dbg.removeDebuggee(g);
    return resumptionVal;
  };
});


testResumptionValues(function (resumptionVal) {
  dbg.onEnterFrame = function (frame) {
    if (frame.older) {
      if (frame.older.older) {
        frame.onStep = function () {
          dbg.removeDebuggee(g);
          return resumptionVal;
        }
      }
    }
  };
});
