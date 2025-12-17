var g = newGlobal({newCompartment: true})
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
print(gw.environment, undefined);

g.eval("var r = /x/;");
var rw = gw.getOwnPropertyDescriptor("r").value;
print(rw.class, "RegExp");
print(rw.environment, undefined);


var fw = gw.getOwnPropertyDescriptor("parseInt").value;
print(fw.class, "Function");
print(fw.environment, undefined);

