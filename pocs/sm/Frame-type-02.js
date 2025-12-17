;

const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

g.eval(`
function* f() {}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  print(frame.type, "call");
};

const it = g.f();

print(frame.type, "call");
frame = null;

it.next();

print(!!frame, true);

print(() => frame.type, Error);
