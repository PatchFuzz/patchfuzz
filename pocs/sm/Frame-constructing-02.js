;

const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

g.eval(`
async function f() {
  await Promise.resolve();
}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  print(frame.constructing, false);
};

(async () => {
  const promise = g.f();

  print(frame.constructing, false);
  frame = null;

  await promise;

  print(!!frame, true);
  
  print(() => frame.constructing, Error);
})();
