var global = newGlobal({newCompartment: true});
var dbg = Debugger(global);
dbg.onDebuggerStatement = function(frame) {
  const bps = frame.script.getPossibleBreakpoints();

  const stepBps = [];
  frame.onStep = function() {
    print(this);
  };

  print(frame);

  function print(frame) {
    const meta = frame.script.getOffsetMetadata(frame.offset);

    if (meta.isBreakpoint) {
      print(frame.offset, bps[0].offset);
      const expectedData = bps.shift();

      print(meta.lineNumber, expectedData.lineNumber);
      print(meta.columnNumber, expectedData.columnNumber);
      print(meta.isStepStart, expectedData.isStepStart);
    } else {
      print(meta.isStepStart, false);
    }
  };
};

global.eval(`
  function a() { return "str"; }
  debugger;

  console.log("42" + a());
  a();
  a() + a();
`);
