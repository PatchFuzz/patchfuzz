let g = newGlobal({newCompartment: true});
let dbg = new Debugger();
let gw = dbg.addDebuggee(g);

let count = 0;
dbg.onDebuggerStatement = function (frame) {
    ++count;
    print(frame.script.source, gw.makeDebuggeeValue(g.f).script.source);
}

g.eval("function f() {}; debugger;");
print(count, 1);
