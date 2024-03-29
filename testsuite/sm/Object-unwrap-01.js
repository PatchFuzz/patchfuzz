

load(libdir + 'asserts.js');

var dbg = new Debugger();
var g = newGlobal({newCompartment: true});
var gw = dbg.addDebuggee(g);

assertEq(Object.getOwnPropertyDescriptor(gw, 'unwrap'), undefined);
var d = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(gw), 'unwrap');
assertEq(d.enumerable, false);
assertEq(d.configurable, true);
assertEq(d.writable, true);

assertEq(typeof gw.unwrap, "function");
assertEq(gw.unwrap.length, 0);
assertEq(gw.unwrap.name, "unwrap");


gw.unwrap();


assertThrowsInstanceOf(function () { Debugger.Object.prototype.unwrap(); }, TypeError);
