var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
let done = false;
dbg.onDebuggerStatement = function (frame) {
  
  
  const parent = frame.olderSavedFrame;
  print(typeof parent.source, "string");
  print(parent.line, 9);
  print(parent.column, 3);
  print(parent.asyncCause, "async");
  print(parent.functionDisplayName, "main");
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
print(done, true);
