var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gobj = dbg.addDebuggee(g);
gobj.defineProperty("x", {configurable: true, enumerable: true, writable: true, value: 'ok'});
print(g.x, 'ok');

var desc = g.Object.getOwnPropertyDescriptor(g, "x");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.writable, true);
