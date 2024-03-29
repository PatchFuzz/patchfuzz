

var g = newGlobal({newCompartment: true})
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
assertEq(gw.environment, undefined);

g.eval("var r = /x/;");
var rw = gw.getOwnPropertyDescriptor("r").value;
assertEq(rw.class, "RegExp");
assertEq(rw.environment, undefined);


var fw = gw.getOwnPropertyDescriptor("parseInt").value;
assertEq(fw.class, "Function");
assertEq(fw.environment, undefined);

