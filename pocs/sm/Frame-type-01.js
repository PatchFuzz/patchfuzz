;

const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

g.eval(`
function f() {}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  print(frame.type, "call");
};

g.f();

print(!!frame, true);

print(() => frame.type, Error);
