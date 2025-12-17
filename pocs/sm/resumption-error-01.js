var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = stack => ({return: 1, throw: 2});
dbg.uncaughtExceptionHook = exc => ({return: "corrected"});
print(g.eval("debugger; false;"), "corrected");
