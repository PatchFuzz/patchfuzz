


var dbg = new Debugger();
var g = newGlobal({newCompartment: true});
var gw = dbg.addDebuggee(g);

assertEq(dbg.findObjects({ class: "Objec" }).length, 0);
assertEq(dbg.findObjects({ class: "Objectttttt" }).length, 0);
