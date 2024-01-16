



var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
let done = false;
dbg.onDebuggerStatement = function (frame) {
  
  
  const parent = frame.olderSavedFrame;
  assertEq(typeof parent.source, "string");
  assertEq(parent.line, 9);
  assertEq(parent.column, 3);
  assertEq(parent.asyncCause, "async");
  assertEq(parent.functionDisplayName, "main");
  done = true;
};

g.eval(`
let draining = false;
async function run() {
  await Promise.resolve();
  debugger;
}

(function main() {
  run();
})();
drainJobQueue();
`);
assertEq(done, true);
