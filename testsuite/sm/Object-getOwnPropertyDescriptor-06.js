

var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
g1.next = g2;








var dbg = new Debugger;
var g1obj = dbg.addDebuggee(g1);
var g2obj = dbg.addDebuggee(g2);
var wobj = g1obj.getOwnPropertyDescriptor("next").value;
assertEq(wobj instanceof Debugger.Object, true);
assertEq(wobj !== g2obj, true);  

g2.x = "ok";
assertEq(wobj.getOwnPropertyDescriptor("x").value, "ok");

g1.g2min = g2.min = g2.Math.min;
g2.eval("Object.defineProperty(this, 'y', {get: min});");
assertEq(g2.y, Infinity);
var wmin = wobj.getOwnPropertyDescriptor("y").get;
assertEq(wmin !== g2obj.getOwnPropertyDescriptor("min").value, true);  
assertEq(wmin, g1obj.getOwnPropertyDescriptor("g2min").value);
