

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
gc(g);
gc(this);
