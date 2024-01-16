

load(libdir + "asserts.js");

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
  assertEq(frame.type, "call");
};

(async () => {
  const it = g.f();

  assertEq(frame.type, "call");
  frame = null;

  const promise = it.next();

  assertEq(!!frame, true);
  assertEq(frame.type, "call");

  await promise;

  
  assertThrowsInstanceOf(() => frame.type, Error);
})();
