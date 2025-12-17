var g = newGlobal({newCompartment: true});
g.evaluate("arr = [1, 2, 3].map(x => x + 1)");
var dbg = new Debugger(g);
print(dbg.findObjects().length, 0);
