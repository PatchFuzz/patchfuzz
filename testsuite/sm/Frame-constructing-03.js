

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
  assertEq(frame.constructing, false);
};

(async () => {
  const it = g.f();

  assertEq(frame.constructing, false);
  frame = null;

  const promise = it.next();

  assertEq(!!frame, true);
  assertEq(frame.constructing, false);

  await promise;

  
  assertThrowsInstanceOf(() => frame.constructing, Error);
})();
