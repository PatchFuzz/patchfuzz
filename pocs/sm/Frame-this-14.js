;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

g.eval(`
var context = {};
var f = function*() {
  return this;
}.bind(context);
`);

let frame;
dbg.onEnterFrame = f => {
  frame = f;
  print(frame.this, gDO.makeDebuggeeValue(g.context));
  dbg.onEnterFrame = undefined;
};

const it = g.f();

print(!!frame, true);
print(frame.this, gDO.makeDebuggeeValue(g.context));

it.next();

print(() => frame.this, Error);
