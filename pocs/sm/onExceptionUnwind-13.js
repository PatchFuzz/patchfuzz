var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onExceptionUnwind = function () {};

g.eval("" + function f(y) {
  if (y > 0) {
    throw 4;
  }
});
g.eval("f(0)");
g.eval("f(1)");
