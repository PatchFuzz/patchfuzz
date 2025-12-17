var g = newGlobal({newCompartment: true});
g.a = g.Array(0, 1, 2);
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var aw = gw.getOwnPropertyDescriptor("a").value;

aw.defineProperty(0, {value: 'ok0'});  
print(g.a[0], 'ok0');
var desc = g.Object.getOwnPropertyDescriptor(g.a, "0");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.writable, true);

aw.defineProperty("1", {value: 'ok1'});  
print(g.a[1], 'ok1');
desc = g.Object.getOwnPropertyDescriptor(g.a, "1");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.writable, true);
