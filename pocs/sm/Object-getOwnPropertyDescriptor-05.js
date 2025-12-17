var g = newGlobal({newCompartment: true});
g.S = function foreignFunction(v) {};
g.eval("var a = {};\n" +
       "function G() {}\n" +
       "Object.defineProperty(a, 'p', {get: G, set: S})");

var dbg = new Debugger;
var gdo = dbg.addDebuggee(g);
var desc = gdo.getOwnPropertyDescriptor("a").value.getOwnPropertyDescriptor("p");
print(desc.enumerable, false);
print(desc.configurable, false);
print("value" in desc, false);
print("writable" in desc, false);
print(desc.get, gdo.getOwnPropertyDescriptor("G").value);
print(desc.set, gdo.getOwnPropertyDescriptor("S").value);
