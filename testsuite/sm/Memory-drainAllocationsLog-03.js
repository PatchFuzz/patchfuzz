

const root = newGlobal({newCompartment: true});
const dbg = new Debugger();
dbg.addDebuggee(root)

dbg.memory.maxAllocationsLogLength = 3;
dbg.memory.trackingAllocationSites = true;

root.eval([
  "this.alloc1 = {};", 
  "this.alloc2 = {};", 
  "this.alloc3 = {};", 
  "this.alloc4 = {};", 
].join("\n"));

const allocs = dbg.memory.drainAllocationsLog();


assertEq(allocs.length, 3);

assertEq(allocs[2].frame.line, 4);

assertEq(allocs.map(x => x.frame.line).indexOf(1), -1);
