var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var code =
        "print(a, 1234);\n" +
        "print(b, null);\n" +
        "print(c, 'ok');\n";
    print(frame.evalWithBindings("eval(s)", {s: code, a: 1234}).return, undefined);
    hits++;
};
g.eval("function f(b) { var c = 'ok'; debugger; }");
g.f(null);
print(hits, 1);
