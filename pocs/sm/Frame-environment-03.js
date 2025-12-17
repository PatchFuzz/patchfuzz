;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var frame;
g.h = function () { frame = dbg.getNewestFrame(); };
g.eval("h();");
print(frame.onStack, false);
print(function () { frame.environment; }, Error);
