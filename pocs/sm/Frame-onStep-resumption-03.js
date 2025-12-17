var g = newGlobal({newCompartment: true});
g.eval("function h() { debugger; }");

var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    if (hits == 1) {
        var rv = frame.eval("h();\n" +
                            "throw 'fail';\n");
        print(rv, null);
    } else {
        frame.older.onStep = function () { return null; };
    }
};
g.h();
print(hits, 2);
