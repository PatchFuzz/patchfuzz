var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

dbg.onDebuggerStatement = (frame) => {
  print(frame.environment.parent.type, "with");
  print(frame.environment.parent.parent.type, "object");
  print(frame.environment.parent.parent.object.getOwnPropertyDescriptor("x").value, 42);
}
g.evalReturningScope("x = 42; debugger;");
