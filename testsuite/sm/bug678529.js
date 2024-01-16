





var g = newGlobal();
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { return {return: 1234}; };
g.eval("function f() { debugger; return 'bad'; }");
assertEq(new g.f(), 1234);
