var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
var savedFrame, savedCallee;
dbg.onDebuggerStatement = function (frame) {
    print(frame, savedFrame);
    print(frame.onStack, true);
    print(frame.callee, savedCallee);
    hits++;
};
g.h = function () {
    savedFrame = dbg.getNewestFrame();
    savedCallee = savedFrame.callee;
    print(savedCallee.name, "f");
};
g.eval("function f() { h(); debugger; }");
g.f();
print(hits, 1);
