var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    for (var i = 0; i <= 4; i++) {
        print(frame.arguments.length, 1);
        print(frame.arguments[0], i);
        frame = frame.older;
    }
    print(frame, null);
    hits++;
};

g.eval("function f(n) { if (n == 0) debugger; else f(n - 1); }");
g.f(4);
print(hits, 1);
