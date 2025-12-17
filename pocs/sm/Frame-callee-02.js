;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
function* f() {}
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

const lastFrame = frame;
const lastCallee = callee;
frame = null;
callee = null;

it.next();

print(frame, lastFrame);
print(callee, lastCallee);


print(() => frame.callee, Error);
