var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
let done = false;
dbg.onDebuggerStatement = function (frame) {
  
  
  const parent = frame.olderSavedFrame;
  print(typeof parent.source, "string");
  print(parent.line, 12);
  print(parent.column, 3);
  print(parent.asyncCause, "async");
  print(parent.functionDisplayName, "main");
  done = true;
};

g.eval(`
let draining = false;
async function run() {
  await Promise.resolve();

  
  print(draining, true);
  debugger;
}

(function main() {
  run();

  
  draining = true;
  drainJobQueue();
  draining = false;
})();
`);
print(done, true);
