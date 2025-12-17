var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { return {return: 1234}; };

print(g.eval("debugger; false;"), 1234);
g.eval("function f() { debugger; return 'bad'; }");
print(g.f(), 1234);
