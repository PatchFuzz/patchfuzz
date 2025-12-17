;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
async function* f() { await Promise.resolve(); }
`);

const fObj = dbg.makeGlobalObjectReference(g).makeDebuggeeValue(g.f);
let frame;
let callee;
dbg.onEnterFrame = function(f) {
  frame = f;
  callee = frame.callee;
};

const it = g.f();

print(frame instanceof Debugger.Frame, true);
print(callee instanceof Debugger.Object, true);
print(callee, fObj);
print(frame.callee, callee);

let lastFrame = frame;
let lastCallee = callee;
frame = null;
callee = null;

const promise = it.next();

print(callee, fObj);
print(frame.callee, callee);

lastFrame = frame;
lastCallee = callee;
frame = null;
callee = null;

promise.then(() => {
  print(frame, lastFrame);
  print(callee, lastCallee);

  
  print(() => frame.callee, Error);
});
