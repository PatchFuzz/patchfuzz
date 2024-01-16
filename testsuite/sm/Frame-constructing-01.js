

load(libdir + "asserts.js");

const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

g.eval(`
function* f() {}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  assertEq(frame.constructing, false);
};

const it = g.f();

assertEq(frame.constructing, false);
frame = null;

it.next();

assertEq(!!frame, true);

assertThrowsInstanceOf(() => frame.constructing, Error);
