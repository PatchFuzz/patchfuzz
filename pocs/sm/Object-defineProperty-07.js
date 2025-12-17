;
var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gobj = dbg.addDebuggee(g);
print(function () { gobj.defineProperty('x', {value: {}}); }, TypeError);
print(function () { gobj.defineProperty('x', {get: Number}); }, TypeError);
print(function () { gobj.defineProperty('x', {get: gobj, set: Number}) },
                       TypeError);
