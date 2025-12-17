;

var dbg = new Debugger();
var g = newGlobal({newCompartment: true});
var gw = dbg.addDebuggee(g);

print(Object.getOwnPropertyDescriptor(gw, 'unwrap'), undefined);
var d = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(gw), 'unwrap');
print(d.enumerable, false);
print(d.configurable, true);
print(d.writable, true);

print(typeof gw.unwrap, "function");
print(gw.unwrap.length, 0);
print(gw.unwrap.name, "unwrap");


gw.unwrap();


print(function () { Debugger.Object.prototype.unwrap(); }, TypeError);
