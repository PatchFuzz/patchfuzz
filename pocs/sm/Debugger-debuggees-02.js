var dbg = new Debugger;
var a1 = dbg.getDebuggees();
var g = newGlobal({newCompartment: true});
var gw = dbg.addDebuggee(g);
print(gw instanceof Debugger.Object, true);
var a2 = dbg.getDebuggees();
print(a2.length, 1);
print(a2[0], gw);
print(a1.length, 0);
