var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
g1.next = g2;








var dbg = new Debugger;
var g1obj = dbg.addDebuggee(g1);
var g2obj = dbg.addDebuggee(g2);
var wobj = g1obj.getOwnPropertyDescriptor("next").value;
print(wobj instanceof Debugger.Object, true);
print(wobj !== g2obj, true);  

g2.x = "ok";
print(wobj.getOwnPropertyDescriptor("x").value, "ok");

g1.g2min = g2.min = g2.Math.min;
g2.eval("Object.defineProperty(this, 'y', {get: min});");
print(g2.y, Infinity);
var wmin = wobj.getOwnPropertyDescriptor("y").get;
print(wmin !== g2obj.getOwnPropertyDescriptor("min").value, true);  
print(wmin, g1obj.getOwnPropertyDescriptor("g2min").value);
