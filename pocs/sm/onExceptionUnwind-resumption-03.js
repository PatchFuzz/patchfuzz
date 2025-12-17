;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onExceptionUnwind = function (frame, exc) {
    return { throw:"sproon" };
};
g.eval("function f() { throw 'ksnife'; }");
print(g.f, "sproon");
