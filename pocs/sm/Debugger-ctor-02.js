;

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("var dbg = new Debugger(debuggeeGlobal);");
print(g.eval("dbg instanceof Debugger"), true);



g.parent = this;
print(function () { g.eval("parent.Debugger(parent.Object())"); }, TypeError);
