


var g = newGlobal({newCompartment: true});
var dbg1 = Debugger(g);
var dbg2 = Debugger();
g.parent = this;
g.eval("parent.dbg2.addDebuggee(this);");
