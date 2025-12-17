var x = {};
var g = newGlobal({newCompartment: true});
g.x = x;
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var xw = gw.getOwnPropertyDescriptor("x").value;
xw.defineProperty("p", {configurable: true, enumerable: true, writable: true, value: gw});
print(x.p, g);

var desc = Object.getOwnPropertyDescriptor(x, "p");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.writable, true);
print(desc.value, g);
