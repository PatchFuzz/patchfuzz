;

var dbg = new Debugger;

function check(val) {
    print(function () { dbg.hasDebuggee(val); }, TypeError);
    print(function () { dbg.addDebuggee(val); }, TypeError);
    print(function () { dbg.removeDebuggee(val); }, TypeError);
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
print(w instanceof Debugger.Object, true);
check(w);
