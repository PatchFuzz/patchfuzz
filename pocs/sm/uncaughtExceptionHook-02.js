var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function () { return {oops: "bad resumption value"}; };
dbg.uncaughtExceptionHook = function (exc) {
    print(exc instanceof TypeError, true);
    return {return: "pass"};
};

print(g.eval("debugger"), "pass");
