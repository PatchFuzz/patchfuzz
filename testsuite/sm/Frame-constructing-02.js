

load(libdir + "asserts.js");

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
  assertEq(frame.constructing, false);
};

(async () => {
  const promise = g.f();

  assertEq(frame.constructing, false);
  frame = null;

  await promise;

  assertEq(!!frame, true);
  
  assertThrowsInstanceOf(() => frame.constructing, Error);
})();
