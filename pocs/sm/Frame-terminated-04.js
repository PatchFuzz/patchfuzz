const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
async function* f(){
  await Promise.resolve();
}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  print(frame.terminated, false);
};

(async () => {
  const it = g.f();

  print(frame instanceof Debugger.Frame, true);
  print(frame.terminated, false);

  const promise = it.next();

  print(frame.terminated, false);

  await promise;

  print(frame.terminated, true);
})();
