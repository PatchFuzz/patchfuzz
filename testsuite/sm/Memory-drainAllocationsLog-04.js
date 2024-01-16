


const root = newGlobal({newCompartment: true});
const dbg = new Debugger();
dbg.addDebuggee(root)

dbg.memory.trackingAllocationSites = true;

root.eval([
  "this.alloc1 = {};", 
  "this.alloc2 = {};", 
  "this.alloc3 = {};", 
  "this.alloc4 = {};", 
].join("\n"));

dbg.memory.maxAllocationsLogLength = 1;
const allocs = dbg.memory.drainAllocationsLog();


assertEq(allocs.length, 1);
