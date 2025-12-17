var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var v;
dbg.onDebuggerStatement = function (frame) {
    v = frame.environment.getVariable("x");
};

g.eval("function f(s) { eval(s); debugger; }");
g.f("var x = 'Q';");
print(v, 'Q');
