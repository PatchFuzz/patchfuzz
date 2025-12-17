var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var f1;
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.older.evalWithBindings("q + r", {r: 3}).return, 5);

    
    print(frame.older.older.evalWithBindings("q + r", {r: 3}).return, 6);
    hits++;
};

g.eval("function f1(q) { if (q == 1) debugger; else f2(2); }");
g.eval("function f2(arg) { var q = arg; f1(1); }");
g.f1(3);
print(hits, 1);
