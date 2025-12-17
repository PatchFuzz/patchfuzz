;

var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var dbg = Debugger(g1, g2);
var hits = 0;
var snapshot = [];
dbg.onDebuggerStatement = function (frame) {
    if (hits++ === 0) {
        print(frame.eval("x();"), null);
    } else {
        for (var f = frame; f; f = f.older) {
            if (f.type === "call" && f.script !== null)
                snapshot.push(f);
        }
        dbg.removeDebuggee(g2);
        return null;
    }
};

g1.eval("function z() { debugger; }");
g2.z = g1.z;
g2.eval("function y() { z(); }");
g2.eval("function x() { y(); }");
print(g2.eval("debugger; 'ok';"), "ok");
print(hits, 2);
print(snapshot.length, 3);
for (var i = 0; i < snapshot.length; i++) {
    print(snapshot[i].onStack, false);
    print(() => frame.script, Error);
}
