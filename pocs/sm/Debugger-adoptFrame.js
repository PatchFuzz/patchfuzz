;

const g = newGlobal({ newCompartment: true });

const dbg1 = new Debugger();
const gDO1 = dbg1.addDebuggee(g);

let suspendedFrame;
dbg1.onDebuggerStatement = function() {
  
  const frame1 = dbg1.getNewestFrame();

  const dbg = new Debugger();
  print(
    () => dbg.adoptFrame(frame1),
    Error,
    "Debugger.Frame's global is not a debuggee"
  );

  dbg.addDebuggee(g);

  const frame2 = dbg.adoptFrame(frame1);

  print(frame1, frame2);

  suspendedFrame = frame1;
};
const generator = g.eval(`
function* fn() {
  debugger;
  yield;
}
fn();
`);
generator.next();

(function() {
  
  const dbg = new Debugger();
  print(
    () => dbg.adoptFrame(suspendedFrame),
    Error,
    "Debugger.Frame's global is not a debuggee"
  );

  dbg.addDebuggee(g);

  const frame2 = dbg.adoptFrame(suspendedFrame);

  print(frame2, suspendedFrame);
})();

generator.next();
const deadFrame = suspendedFrame;

(function() {
  
  const dbg = new Debugger();

  
  
  dbg.adoptFrame(deadFrame);

  dbg.addDebuggee(g);

  const frame2 = dbg.adoptFrame(deadFrame);

  print(frame2, deadFrame);
})();

function print(frame1, frame2) {
  print(frame2.onStack, frame1.onStack);
  print(frame2.terminated, frame1.terminated);

  if (!frame2.terminated) {
    print(frame2.type, frame1.type);
    print(frame2.offset, frame1.offset);
  }
}
