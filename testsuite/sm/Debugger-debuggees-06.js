

load(libdir + "asserts.js");

var dbg = new Debugger;

function check(val) {
    assertThrowsInstanceOf(function () { dbg.hasDebuggee(val); }, TypeError);
    assertThrowsInstanceOf(function () { dbg.addDebuggee(val); }, TypeError);
    assertThrowsInstanceOf(function () { dbg.removeDebuggee(val); }, TypeError);
}


check(undefined);
check(null);
check(false);
check(1);
check(NaN);
check("ok");
check(Symbol("ok"));


var g = newGlobal({newCompartment: true});
var dbg2 = new Debugger;
var w = dbg2.addDebuggee(g);
assertEq(w instanceof Debugger.Object, true);
check(w);
