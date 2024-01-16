

const root = newGlobal({newCompartment: true});
const dbg = new Debugger(root);
dbg.memory.trackingAllocationSites = true;
dbg.memory.maxAllocationsLogLength = 1;

root.eval("(" + function immediate() {
  
  this.objs = [{}, {}, {}, {}];
} + "());");


assertEq(dbg.memory.allocationsLogOverflowed, true);


const allocs = dbg.memory.drainAllocationsLog();
assertEq(dbg.memory.allocationsLogOverflowed, false);



dbg.memory.maxAllocationsLogLength = 10000;
root.eval("this.objs = [{}, {}, {}, {}];");
assertEq(dbg.memory.allocationsLogOverflowed, false);
