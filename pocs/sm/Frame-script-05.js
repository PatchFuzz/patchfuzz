;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
async function f() {
  await Promise.resolve()
}
`);

let frame;
let script;
dbg.onEnterFrame = function(f) {
  frame = f;
  script = frame.script;
};

const promise = g.f();

print(frame instanceof Debugger.Frame, true);
print(script instanceof Debugger.Script, true);
print(frame.script, script);

const lastFrame = frame;
const lastScript = script;
frame = null;
script = null;

promise.then(() => {
  print(frame, lastFrame);
  print(script, lastScript);

  
  print(() => frame.script, Error);
});
