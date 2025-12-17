;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
dbg.addDebuggee(g);

dbg.onEnterFrame = (frame) => {
  frame.onStep = () => {
    if (frame.environment.getVariable("x") === 42) {
      print(() => frame.environment.setVariable("x", 43), TypeError);
      print(frame.environment.getVariable("x"), 42);
    }
  };
};

const unaliased = g.parseModule(`
  const x = 42;
  print(x, 42);
`);
moduleLink(unaliased);
moduleEvaluate(unaliased);

const aliased = g.parseModule(`
  const x = 42;
  print(x, 42);

  function closedOver() {
    return x;
  }
`);
moduleLink(aliased);
moduleEvaluate(aliased);
