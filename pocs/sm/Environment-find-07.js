var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
dbg.addDebuggee(g);

g.eval("" + function f() {
  var x = 42;
  function g() { }
  g();
});

dbg.onEnterFrame = function (f) {
  if (f.callee && (f.callee.name === "g")) {
    genv = f.environment.parent;
    print(genv.optimizedOut, true);
    print(genv.find("f").type, "object");
    print(f.environment.find("x"), genv);
  }
}

g.f();
