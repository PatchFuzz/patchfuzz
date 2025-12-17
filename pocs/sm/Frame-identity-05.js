var g = newGlobal({newCompartment: true});
g.eval("function* f() { debugger; yield 1; debugger; }");
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    if (hits === 0)
        frame.seen = true;
    else
        print(frame.seen, true);
    gc();
    hits++;
};
var it = g.f();
gc();
print(it.next().value, 1);
gc();
print(it.next().done, true);
print(hits, 2);
