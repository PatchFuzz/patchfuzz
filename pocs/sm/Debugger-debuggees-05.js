var g = newGlobal({newCompartment: true});
var dbg1 = new Debugger;
var gw1 = dbg1.addDebuggee(g);
var dbg2 = new Debugger;
var gw2 = dbg2.addDebuggee(g);
print(gw1 !== gw2, true);
