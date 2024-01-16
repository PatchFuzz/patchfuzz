

load(libdir + "asserts.js");
var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gobj = dbg.addDebuggee(g);
assertThrowsInstanceOf(function () { gobj.defineProperty('x', {value: {}}); }, TypeError);
assertThrowsInstanceOf(function () { gobj.defineProperty('x', {get: Number}); }, TypeError);
assertThrowsInstanceOf(function () { gobj.defineProperty('x', {get: gobj, set: Number}) },
                       TypeError);
