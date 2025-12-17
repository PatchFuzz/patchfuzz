;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
dbg.addDebuggee(g);

g.eval("" + function unaliased() {
  const x = 42;
  print(x, 42);
});

g.eval("" + function aliased() {
  const x = 42;
  print(x, 42);
  return () => x;
});

dbg.onEnterFrame = (frame) => {
  frame.onStep = () => {
    if (frame.environment.getVariable("x") === 42) {
      print(() => frame.environment.setVariable("x", 43), TypeError);
      print(frame.environment.getVariable("x"), 42);
    }
  };
};

g.unaliased();

g.aliased();
