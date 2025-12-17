;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
print(dbg.getNewestFrame(), null);

var global = this;
var frame;
function f() {
    frame = dbg.getNewestFrame();
    print(frame instanceof Debugger.Frame, true);
    print(frame.type, "eval");
    print(frame.older, null);
}
g.h = this;
g.eval("h.f()");
print(frame.onStack, false);
print(function () { frame.older; }, Error);
