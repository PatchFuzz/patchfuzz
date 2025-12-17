;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

g.eval(`
async function* f() {
  await Promise.resolve();
}
`);

let frame;
dbg.onEnterFrame = f => {
  frame = f;
  dbg.onEnterFrame = undefined;
};

(async () => {
  const it = g.f();

  print(frame.older, null);

  const promise = it.next();

  print(frame.older, null);

  await promise;

  print(() => frame.older, Error);
})();
