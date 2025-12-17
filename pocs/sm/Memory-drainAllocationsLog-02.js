;

const root = newGlobal();
const dbg = new Debugger();

dbg.memory.trackingAllocationSites = true;
root.eval("this.alloc1 = {}");
dbg.memory.trackingAllocationSites = false;
root.eval("this.alloc2 = {};");

print(() => dbg.memory.drainAllocationsLog(),
                       Error);
