var g = newGlobal({newCompartment: true});
g.eval("var a = {};");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var desc = gw.getOwnPropertyDescriptor("a");
print(desc.value instanceof Debugger.Object, true);
gw.defineProperty("b", desc);
print(g.a, g.b);
