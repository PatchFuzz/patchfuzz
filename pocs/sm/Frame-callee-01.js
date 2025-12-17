;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
function f() {}
`);

const fObj = dbg.makeGlobalObjectReference(g).makeDebuggeeValue(g.f);
let frame;
let callee;
dbg.onEnterFrame = function(f) {
  frame = f;
  callee = frame.callee;
};

g.f();

print(frame instanceof Debugger.Frame, true);
print(callee instanceof Debugger.Object, true);
print(callee, fObj);


print(() => frame.callee, Error);
