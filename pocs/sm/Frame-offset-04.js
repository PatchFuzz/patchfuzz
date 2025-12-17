;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
async function f() {
  await Promise.resolve();
}
`);

const ranges = [];
let script;
let frame;
dbg.onEnterFrame = function(f) {
  if (frame) {
    print(f, frame);
    print(f.script, script);
  } else {
    frame = f;
    script = f.script;
    print(frame instanceof Debugger.Frame, true);
    print(script instanceof Debugger.Script, true);
  }

  const range = [script.getOffsetMetadata(frame.offset).lineNumber, null];
  ranges.push(range);
  f.onPop = () => {
    range[1] = script.getOffsetMetadata(frame.offset).lineNumber;
  };
};

(async () => {
  const promise = g.f();

  print(ranges.length, 1);
  print(ranges[0][0], 2);
  print(ranges[0][1], 3);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 3);

  await promise;

  print(ranges.length, 2);
  print(ranges[1][0], 3);
  print(ranges[1][1], 4);

  
  print(() => frame.offset, Error);
})();
