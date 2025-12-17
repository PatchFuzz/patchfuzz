;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
var snapshot;
dbg.onDebuggerStatement = function (frame) {
    var stack = [];
    for (var f = frame; f; f = f.older) {
        if (f.type === "call" && f.script !== null)
            stack.push(f);
    }
    snapshot = stack;
    if (hits++ === 0)
        print(frame.eval("x();"), null);
    else
        return null;
};

g.eval("function z() { debugger; }");
g.eval("function y() { z(); }");
g.eval("function x() { y(); }");
print(g.eval("debugger; 'ok';"), "ok");
print(hits, 2);
print(snapshot.length, 3);
for (var i = 0; i < snapshot.length; i++) {
    print(snapshot[i].onStack, false);
    print(() => frame.script, Error);
}
