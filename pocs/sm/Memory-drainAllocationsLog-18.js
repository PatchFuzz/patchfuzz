gczeal(0);

const root = newGlobal({newCompartment: true});
const dbg = new Debugger();
const wrappedRoot = dbg.addDebuggee(root);

dbg.memory.trackingAllocationSites = true;

root.eval(
  `
  for (let i = 0; i < 10; i++)
    allocationMarker({ nursery: true });

  for (let i = 0; i < 10; i++)
    allocationMarker({ nursery: false });
  `
);

let entries = dbg.memory.drainAllocationsLog().filter(e => e.class == "AllocationMarker");

print(entries.length, 20);

for (let i = 0; i < 10; i++)
  print(entries[i].inNursery, true);

for (let i = 10; i < 20; i++)
  print(entries[i].inNursery, false);
