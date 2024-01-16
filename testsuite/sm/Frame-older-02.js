

var g = newGlobal({ newCompartment: true });
var dbg = new Debugger(g);
let done = false;
dbg.onDebuggerStatement = function (frame) {
  
  
  
  assertEq(!!frame.older, false);

  done = true;
};

g.eval(`
let draining = false;
async function run() {
  await Promise.resolve();

  
  assertEq(draining, true);
  debugger;
}

(function main() {
  run();

  
  draining = true;
  drainJobQueue();
  draining = false;
})();
`);
assertEq(done, true);
