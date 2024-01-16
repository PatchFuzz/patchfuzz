

var g = newGlobal({newCompartment: true});
g.a = g.Array(0, 1, 2);
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var aw = gw.getOwnPropertyDescriptor("a").value;

aw.defineProperty(0, {value: 'ok0'});  
assertEq(g.a[0], 'ok0');
var desc = g.Object.getOwnPropertyDescriptor(g.a, "0");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, true);
assertEq(desc.writable, true);

aw.defineProperty("1", {value: 'ok1'});  
assertEq(g.a[1], 'ok1');
desc = g.Object.getOwnPropertyDescriptor(g.a, "1");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, true);
assertEq(desc.writable, true);
