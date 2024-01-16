


var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onExceptionUnwind = function (frame, exc) {
    return { return:"sproon" };
};
g.eval("function f() { throw 'ksnife'; }");
assertEq(typeof new g.f, "object");
