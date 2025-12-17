var g = newGlobal({newCompartment: true});
g.p = 1;
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

gw.defineProperty("p", {value: 2});
print(g.p, 2);

var desc = Object.getOwnPropertyDescriptor(g, "p");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.writable, true);
print(desc.value, 2);

g.p = 3;
print(g.p, 3);
