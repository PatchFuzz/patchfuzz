

function timeoutfunc() {}
timeout(1, timeoutfunc);
var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
