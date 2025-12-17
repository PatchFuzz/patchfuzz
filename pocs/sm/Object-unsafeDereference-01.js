var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);

print(gw.getOwnPropertyDescriptor('Math').value.unsafeDereference(), g.Math);

g.eval('var obj = {}');
print(gw.getOwnPropertyDescriptor('obj').value.unsafeDereference(), g.obj);
