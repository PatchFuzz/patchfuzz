var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
dbg.addDebuggee(g);
g = newGlobal({sameZoneAs: g.Math});
dbg.findScripts({get source() { gc(); return undefined; }});
