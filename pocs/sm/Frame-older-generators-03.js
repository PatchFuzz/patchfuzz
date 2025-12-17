;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
function* f() {}
`);

let frame;
dbg.onEnterFrame = f => {
  frame = f;
  dbg.onEnterFrame = undefined;
};

const it = g.f();

print(frame.older, null);

it.next();

print(() => frame.older, Error);
