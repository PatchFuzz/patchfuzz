var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
g.parent = this;
var n = 2;
g.eval("parent.dbg.removeDebuggee(this); parent.n += 2");
print(n, 4);
