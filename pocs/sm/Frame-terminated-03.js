const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
function* f(){}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  print(frame.terminated, false);
};

const it = g.f();

print(frame instanceof Debugger.Frame, true);
print(frame.terminated, false);

it.next();

print(frame.terminated, true);
