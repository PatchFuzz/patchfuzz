var g = newGlobal({newCompartment: true});
var obj = g.eval("({x: 1})");
print(g.Object.isExtensible(obj), true);

var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var objw = gw.makeDebuggeeValue(obj);
print(objw.isExtensible(), true);

print(objw.preventExtensions(), undefined);
print(g.Object.isExtensible(obj), false);
print(objw.isExtensible(), false);


print(objw.preventExtensions(), undefined);
