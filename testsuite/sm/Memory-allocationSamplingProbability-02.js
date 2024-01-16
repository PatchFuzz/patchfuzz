


const root = newGlobal({newCompartment: true});

const dbg = new Debugger();
const wrappedRoot = dbg.addDebuggee(root);

root.eval(`
  objs = [];
  objs.push(new Object);
`);

root.eval("" + function makeSomeAllocations() {
  for (var i = 0; i < 100; i++) {
    objs.push(new Object);
  }
});

function measure(P, expected) {
  root.setSavedStacksRNGState(Number.MAX_SAFE_INTEGER - 1);
  dbg.memory.allocationSamplingProbability = P;
  root.makeSomeAllocations();
  assertEq(dbg.memory.drainAllocationsLog().length, expected);
}

dbg.memory.trackingAllocationSites = true;





measure(0.0, 0);
measure(1.0, 100);
measure(0.1, 11);
measure(0.5, 49);
