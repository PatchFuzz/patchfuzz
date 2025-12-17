;

const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

g.eval(`
async function* f() {
  await Promise.resolve();
}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  print(frame.type, "call");
};

(async () => {
  const it = g.f();

  print(frame.type, "call");
  frame = null;

  const promise = it.next();

  print(!!frame, true);
  print(frame.type, "call");

  await promise;

  
  print(() => frame.type, Error);
})();
