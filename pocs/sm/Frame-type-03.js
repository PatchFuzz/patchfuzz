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
  print(frame.type, "call");
};

(async () => {
  const promise = g.f();

  print(frame.type, "call");
  frame = null;

  await promise;

  print(!!frame, true);
  
  print(() => frame.type, Error);
})();
