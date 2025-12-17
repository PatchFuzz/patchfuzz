var g = newGlobal({ newCompartment: true });
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

dbg.onDebuggerStatement = function (frame) {
  var e = frame.eval("this.y = 13");
  return undefined;
};

g.eval("class A { static x = 10; static { debugger; } }; a = A;");
print(g.a.x, 10);
print(g.a.y, 13);

