var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var code = "print(c, 'ok');\n";
    print(frame.evalWithBindings("eval(s)", {s: code, a: 1234}).return, undefined);
};
g.eval("function first() { return second(); }");
g.eval("function second() { return eval('third()'); }");
g.eval("function third() { debugger; }");
g.evaluate("first();");
