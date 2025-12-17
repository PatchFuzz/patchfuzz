var g = newGlobal({newCompartment: true});
g.eval("function f(a) { debugger; return arguments[0]; }");
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    frame.environment.setVariable("a", 2);
};
print(g.f(1), 2);
