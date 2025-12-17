;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
print(function () { gw.defineProperty("x"); }, TypeError);
