





var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    assertEq(dumpStack(), true);
};
g.eval("function f(a, [b, c], {x: [y], z: w}, {q}) { debugger; }");
g.eval("f(1, [2, 3], {x: [4], z: 5}, {q: 6});");
