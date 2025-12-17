var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onDebuggerStatement = function (frame) {
    var env = frame.environment.find("x");
    env.setVariable("x", 2);
};
g.eval("var obj1 = {x: 1}, obj2 = Object.create(obj1), z; with (obj2) { debugger; z = x; }");
print(g.obj1.x, 1);
print(g.obj2.x, 2);
print(g.z, 2);



var desc = Object.getOwnPropertyDescriptor(g.obj2, "x");
print(desc.configurable, true);
print(desc.enumerable, true);
print(desc.writable, true);
print(desc.value, 2);
