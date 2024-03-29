

load(libdir + "asserts.js");

const g = newGlobal({ newCompartment: true });
const dbg = Debugger(g);

g.eval(`
function* f() {}
`);

let frame;
dbg.onEnterFrame = function(f) {
  frame = f;
  assertEq(frame.type, "call");
};

const it = g.f();

assertEq(frame.type, "call");
frame = null;

it.next();

assertEq(!!frame, true);

assertThrowsInstanceOf(() => frame.type, Error);
