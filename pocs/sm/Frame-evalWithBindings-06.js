var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    print(frame.evalWithBindings("y = z; x = w;", {z: 2, w: 3}).return, 3);
};
g.eval("function f(x) { debugger; print(x, 3); }");
g.eval("var y = 0; f(0);");
print(g.y, 2);
