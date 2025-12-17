var g = newGlobal({newCompartment: true});
g.dbg = new Debugger;

g.eval("" + function f(d) {
  g(d);
  if (d)
    print(dbg.hasDebuggee(this), true);
});

g.eval("" + function g(d) {
  if (!d)
    return;

  dbg.addDebuggee(this);
});

g.eval("(" + function test() {
  f(false);
  f(false);
  f(true);
  f(true);
} + ")();");
