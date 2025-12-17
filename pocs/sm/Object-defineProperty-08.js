;
var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var dbg = new Debugger;
var g1w = dbg.addDebuggee(g1);
var g2w = dbg.addDebuggee(g2);
print(function () { g1w.defineProperty('x', {value: g2w}); }, TypeError);
print(function () { g1w.defineProperty('x', {get: g1w, set: g2w}); }, TypeError);
