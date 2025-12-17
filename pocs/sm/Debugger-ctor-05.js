var g = newGlobal({newCompartment: true});
g.eval("var a = {}, b = {};");
var dbg = Debugger(g.a, g.b);
var arr = dbg.getDebuggees();
print(arr.length, 1);
print(arr[0], dbg.addDebuggee(g));
