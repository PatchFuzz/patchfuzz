var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
g.value = undefined;
g.eval("function gf() { return 12; }\n" +
       "function sf(v) { value = v; }\n");
var gfw = gw.getOwnPropertyDescriptor("gf").value;
var sfw = gw.getOwnPropertyDescriptor("sf").value;
gw.defineProperty("x", {configurable: true, get: gfw, set: sfw});
print(g.x, 12);
g.x = 'ok';
print(g.value, 'ok');

var desc = g.Object.getOwnPropertyDescriptor(g, "x");
print(desc.configurable, true);
print(desc.enumerable, false);
print(desc.get, g.gf);
print(desc.set, g.sf);
