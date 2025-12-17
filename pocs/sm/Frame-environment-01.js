var g = newGlobal({newCompartment: true})
var dbg = Debugger(g);
g.h = function () {
    print(dbg.getNewestFrame().environment instanceof Debugger.Environment, true);
};

g.eval("h()");
g.evaluate("h()");
g.eval("eval('h()')");
g.eval("function f() { h(); }");
g.f();
