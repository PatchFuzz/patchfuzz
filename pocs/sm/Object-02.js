var g = newGlobal({newCompartment: true});
g.f = function (a, b) { return a + "/" + b; };
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var f = frame.eval("f").return;
    print(f.call(null, "a", "b").return, "a/b");
    hits++;
};
g.eval("debugger;");
print(hits, 1);
