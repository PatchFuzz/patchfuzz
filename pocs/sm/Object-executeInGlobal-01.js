var g = newGlobal({newCompartment: true});
var h = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var hw = dbg.addDebuggee(h);

g.y = "Bitte Orca";
h.y = "Visiter";
var y = "W H O K I L L";
print(gw.executeInGlobal('y').return, "Bitte Orca");
print(hw.executeInGlobal('y').return, "Visiter");
