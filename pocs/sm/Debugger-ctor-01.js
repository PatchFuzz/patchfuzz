;


print(function () { Debugger(null); }, TypeError);
print(function () { Debugger(true); }, TypeError);
print(function () { Debugger(42); }, TypeError);
print(function () { Debugger("bad"); }, TypeError);
print(function () { Debugger(function () {}); }, TypeError);
print(function () { Debugger(this); }, TypeError);
print(function () { new Debugger(null); }, TypeError);
print(function () { new Debugger(true); }, TypeError);
print(function () { new Debugger(42); }, TypeError);
print(function () { new Debugger("bad"); }, TypeError);
print(function () { new Debugger(function () {}); }, TypeError);
print(function () { new Debugger(this); }, TypeError);


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
print(dbg instanceof Debugger, true);
print(Object.getPrototypeOf(dbg), Debugger.prototype);
