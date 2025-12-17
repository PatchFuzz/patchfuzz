const root = newGlobal({newCompartment: true});
const dbg = new Debugger(root);
dbg.memory.trackingAllocationSites = true;
dbg.memory.maxAllocationsLogLength = 1;

root.eval("(" + function immediate() {
  
  this.objs = [{}, {}, {}, {}];
} + "());");


print(dbg.memory.allocationsLogOverflowed, true);


const allocs = dbg.memory.drainAllocationsLog();
print(dbg.memory.allocationsLogOverflowed, false);



dbg.memory.maxAllocationsLogLength = 10000;
root.eval("this.objs = [{}, {}, {}, {}];");
print(dbg.memory.allocationsLogOverflowed, false);
