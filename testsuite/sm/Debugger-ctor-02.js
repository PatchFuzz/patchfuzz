

load(libdir + 'asserts.js');

var g = newGlobal({newCompartment: true});
g.debuggeeGlobal = this;
g.eval("var dbg = new Debugger(debuggeeGlobal);");
assertEq(g.eval("dbg instanceof Debugger"), true);



g.parent = this;
assertThrowsInstanceOf(function () { g.eval("parent.Debugger(parent.Object())"); }, TypeError);
