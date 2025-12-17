gczeal(0);

let g = newGlobal({newCompartment: true});
g.eval('function* f() { yield 123; }');

let dbg = Debugger(g);
dbg.onEnterFrame = frame => {
    dbg.removeDebuggee(g);
    dbg.addDebuggee(g);
};




gczeal(10, 0);
gcslice(1);
while (gcstate() !== "NotAcctive" && gcstate() !== "Sweep") {
  gcslice(1000);
}

let genObj = g.f();
genObj.return();
print(gcstate(), "Sweep");
