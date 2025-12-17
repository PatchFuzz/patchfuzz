var g = newGlobal({newCompartment: true});
g.eval("function f() { debugger; }");
var dbg = new Debugger();
var oddball = {[Symbol.toPrimitive]: () => dbg.removeDebuggee(g)};

for (var method of ["find", "getVariable", "setVariable"]) {
  dbg.addDebuggee(g);
  dbg.onDebuggerStatement = frame => {
    var ex;
    try {
      frame.environment[method](oddball, oddball);
    } catch (e) {
      ex = e;
    }
    print(ex.message, "Debugger.Environment is not a debuggee environment");
  };
  g.f();
}
