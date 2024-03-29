
let g = newGlobal({newCompartment: true});
let dbg = new Debugger();
let gw = dbg.addDebuggee(g);

let count = 0;
dbg.onDebuggerStatement = function (frame) {
    ++count;
    assertEq(frame.script.source, gw.makeDebuggeeValue(g.f).script.source);
}

g.eval("function f() {}; debugger;");
assertEq(count, 1);
