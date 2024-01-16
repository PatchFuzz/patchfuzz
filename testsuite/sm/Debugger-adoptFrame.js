

load(libdir + "asserts.js");

const g = newGlobal({ newCompartment: true });

const dbg1 = new Debugger();
const gDO1 = dbg1.addDebuggee(g);

let suspendedFrame;
dbg1.onDebuggerStatement = function() {
  
  const frame1 = dbg1.getNewestFrame();

  const dbg = new Debugger();
  assertErrorMessage(
    () => dbg.adoptFrame(frame1),
    Error,
    "Debugger.Frame's global is not a debuggee"
  );

  dbg.addDebuggee(g);

  const frame2 = dbg.adoptFrame(frame1);

  assertMatchingFrame(frame1, frame2);

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
  assertErrorMessage(
    () => dbg.adoptFrame(suspendedFrame),
    Error,
    "Debugger.Frame's global is not a debuggee"
  );

  dbg.addDebuggee(g);

  const frame2 = dbg.adoptFrame(suspendedFrame);

  assertMatchingFrame(frame2, suspendedFrame);
})();

generator.next();
const deadFrame = suspendedFrame;

(function() {
  
  const dbg = new Debugger();

  
  
  dbg.adoptFrame(deadFrame);

  dbg.addDebuggee(g);

  const frame2 = dbg.adoptFrame(deadFrame);

  assertMatchingFrame(frame2, deadFrame);
})();

function assertMatchingFrame(frame1, frame2) {
  assertEq(frame2.onStack, frame1.onStack);
  assertEq(frame2.terminated, frame1.terminated);

  if (!frame2.terminated) {
    assertEq(frame2.type, frame1.type);
    assertEq(frame2.offset, frame1.offset);
  }
}
