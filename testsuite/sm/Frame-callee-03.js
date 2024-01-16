

load(libdir + "asserts.js");

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
async function f() { await Promise.resolve(); }
`);

const fObj = dbg.makeGlobalObjectReference(g).makeDebuggeeValue(g.f);
let frame;
let callee;
dbg.onEnterFrame = function(f) {
  frame = f;
  callee = frame.callee;
};

const promise = g.f();

assertEq(frame instanceof Debugger.Frame, true);
assertEq(callee instanceof Debugger.Object, true);
assertEq(callee, fObj);
assertEq(frame.callee, callee);

const lastFrame = frame;
const lastCallee = callee;
frame = null;
callee = null;

promise.then(() => {
  assertEq(frame, lastFrame);
  assertEq(callee, lastCallee);

  
  assertThrowsInstanceOf(() => frame.callee, Error);
});
