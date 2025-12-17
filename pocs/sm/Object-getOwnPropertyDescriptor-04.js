var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gdo = dbg.addDebuggee(g);

g.called = false;
g.eval("var a = {get x() { called = true; }};");

var desc = gdo.getOwnPropertyDescriptor("a").value.getOwnPropertyDescriptor("x");
print(g.called, false);
print(desc.enumerable, true);
print(desc.configurable, true);
print("value" in desc, false);
print("writable" in desc, false);
print(desc.get instanceof Debugger.Object, true);
print(desc.get.class, "Function");
print(desc.set, undefined);
