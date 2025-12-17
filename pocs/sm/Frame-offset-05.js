;

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
g.eval(`
async function* f() {
  yield 11;
  yield 21;
  yield 31;
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
  let promise;
  const it = g.f();

  print(ranges.length, 1);
  print(ranges[0][0], 2);
  print(ranges[0][1], 2);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 2);

  promise = it.next();

  print(ranges.length, 2);
  print(ranges[1][0], 2);
  print(ranges[1][1], 3);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 3);

  await promise;

  print(ranges.length, 3);
  print(ranges[2][0], 3);
  print(ranges[2][1], 3);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 3);

  promise = it.next();

  print(ranges.length, 4);
  print(ranges[3][0], 3);
  print(ranges[3][1], 4);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 4);

  await promise;

  print(ranges.length, 5);
  print(ranges[4][0], 4);
  print(ranges[4][1], 4);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 4);

  promise = it.next();

  print(ranges.length, 6);
  print(ranges[5][0], 4);
  print(ranges[5][1], 5);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 5);

  await promise;

  print(ranges.length, 7);
  print(ranges[6][0], 5);
  print(ranges[6][1], 5);
  print(script.getOffsetMetadata(frame.offset).lineNumber, 5);

  promise = it.next();

  print(ranges.length, 8);
  print(ranges[7][0], 5);
  print(ranges[7][1], 6);

  
  print(() => frame.offset, Error);
})();
