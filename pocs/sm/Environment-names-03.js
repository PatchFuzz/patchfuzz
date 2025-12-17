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
    var names = f.environment.parent.names();
    print(names.indexOf("x") !== -1, true);
    print(names.indexOf("g") !== -1, true);
    print(names.length, 3); 
  }
}

g.f();
