;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

g.eval(`
var context = {};
var f = async function() {
  await Promise.resolve();
  return this;
}.bind(context);
`);

let frame;
dbg.onEnterFrame = f => {
  frame = f;
  print(frame.this, gDO.makeDebuggeeValue(g.context));
  dbg.onEnterFrame = undefined;
};

(async () => {
  const promise = g.f();

  print(!!frame, true);
  print(frame.this, gDO.makeDebuggeeValue(g.context));

  await promise;

  print(() => frame.this, Error);
})();
