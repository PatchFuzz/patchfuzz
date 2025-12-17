var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var arr = frame.script.getChildScripts();
    print(arr.length, 1);
    print(arr[0], frame.eval("h").return.script);
    hits++;
};

g.eval("function f(s) { eval(s); }");
g.f("debugger; function h(a) { return a + 1; }");
print(hits, 1);
