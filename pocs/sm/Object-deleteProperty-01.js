var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

print(gw.deleteProperty("no such property"), true);

g.Object.defineProperty(g, "p", {configurable: true, value: 0});
print(gw.deleteProperty("p"), true);

g[0] = 0;
print(gw.deleteProperty(0), true);
print("0" in g, false);

print(gw.deleteProperty(), false);  
print(g.undefined, undefined);
