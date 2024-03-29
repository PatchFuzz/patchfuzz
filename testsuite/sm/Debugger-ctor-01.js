load(libdir + 'asserts.js');


assertThrowsInstanceOf(function () { Debugger(null); }, TypeError);
assertThrowsInstanceOf(function () { Debugger(true); }, TypeError);
assertThrowsInstanceOf(function () { Debugger(42); }, TypeError);
assertThrowsInstanceOf(function () { Debugger("bad"); }, TypeError);
assertThrowsInstanceOf(function () { Debugger(function () {}); }, TypeError);
assertThrowsInstanceOf(function () { Debugger(this); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(null); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(true); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(42); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger("bad"); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(function () {}); }, TypeError);
assertThrowsInstanceOf(function () { new Debugger(this); }, TypeError);


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
assertEq(dbg instanceof Debugger, true);
assertEq(Object.getPrototypeOf(dbg), Debugger.prototype);
