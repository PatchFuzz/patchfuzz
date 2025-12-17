var g = newGlobal({newCompartment: true});
var dbg = Debugger(g, g, g);
print(dbg.getDebuggees().length, 1);
