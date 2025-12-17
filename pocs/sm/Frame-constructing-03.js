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
  print(frame.constructing, false);
};

(async () => {
  const it = g.f();

  print(frame.constructing, false);
  frame = null;

  const promise = it.next();

  print(!!frame, true);
  print(frame.constructing, false);

  await promise;

  
  print(() => frame.constructing, Error);
})();
