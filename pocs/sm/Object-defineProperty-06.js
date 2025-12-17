var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

gw.defineProperty("p", {configurable: true, enumerable: true});
print(g.p, undefined);
var desc = g.Object.getOwnPropertyDescriptor(g, "p");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.value, undefined);
print(desc.writable, false);

gw.defineProperty("q", {});
print(g.q, undefined);
var desc = g.Object.getOwnPropertyDescriptor(g, "q");
print(desc.configurable, false);
print(desc.enumerable, false);
print(desc.value, undefined);
print(desc.writable, false);
