


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function () { return {oops: "bad resumption value"}; };
dbg.uncaughtExceptionHook = function (exc) {
    assertEq(exc instanceof TypeError, true);
    return {return: "pass"};
};

assertEq(g.eval("debugger"), "pass");
