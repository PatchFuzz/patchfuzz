var g = newGlobal({newCompartment: true});
g.eval("var obj = {};");

var dbg = Debugger(g);
var obj;
dbg.onDebuggerStatement = function (frame) { obj = frame.eval("obj").return; };
g.eval("debugger;");

print(obj.getOwnPropertyDescriptor(), undefined);
g.obj.undefined = 17;
var desc = obj.getOwnPropertyDescriptor();
print(desc.value, 17);
