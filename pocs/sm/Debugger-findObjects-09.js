var dbg = new Debugger();
var g = newGlobal({newCompartment: true});
var gw = dbg.addDebuggee(g);

print(dbg.findObjects({ class: "Objec" }).length, 0);
print(dbg.findObjects({ class: "Objectttttt" }).length, 0);
