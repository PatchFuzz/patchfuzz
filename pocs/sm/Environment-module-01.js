var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
dbg.onEnterFrame = function (frame) {
  if (!frame.older) {
    return;
  }
  const env = frame.older.environment;
  print(env.names().join(','), "foo,y,x,z");
  print(env.getVariable('x'), 0);
  print(env.getVariable('y'), 1);
  print(env.getVariable('z'), 2);
  env.setVariable('x', 3);
  print(env.getVariable('x'), 3);
};
const m = g.parseModule(`
  var x = 0;
  export var y = 1;
  const z = 2;
  foo();
  function foo() {}
`);
moduleLink(m);
moduleEvaluate(m);
