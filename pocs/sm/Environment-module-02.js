var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);

const m = g.parseModule(`
  var x = 42;
  export function foo() { return x; }
  foo();
`);
moduleLink(m);

let fooFunction;
dbg.onEnterFrame = function (frame) {
  fooFunction = frame.callee;
};

moduleEvaluate(m);
print(fooFunction instanceof Debugger.Object, true);

dbg.onEnterFrame = function (frame) {
  const env = frame.environment.parent;
  print(env.names().join(','), "foo,x");
  print(env.getVariable('x'), 42);
  env.setVariable('x', 3);
  print(env.getVariable('x'), 3);
};

fooFunction.call();
