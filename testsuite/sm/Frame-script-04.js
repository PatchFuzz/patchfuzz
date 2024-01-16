

load(libdir + "asserts.js");

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
function* f() {}
`);

let frame;
let script;
dbg.onEnterFrame = function(f) {
  frame = f;
  script = frame.script;
};

const it = g.f();

assertEq(frame instanceof Debugger.Frame, true);
assertEq(script instanceof Debugger.Script, true);
assertEq(frame.script, script);

const lastFrame = frame;
const lastScript = script;
frame = null;
script = null;

it.next();

assertEq(frame, lastFrame);
assertEq(script, lastScript);


assertThrowsInstanceOf(() => frame.script, Error);
