;

let dbg1, dbg2, root1, root2;

function isTrackingAllocations(global, dbgObj) {
  const site = dbgObj.makeDebuggeeValue(global.eval("({})")).allocationSite;
  if (site) {
    print(typeof site, "object");
  }
  return !!site;
}

function test(name, fn) {
  print();
  print(name);

  
  root1 = newGlobal({newCompartment: true});
  root2 = newGlobal({newCompartment: true});
  dbg1 = new Debugger;
  dbg2 = new Debugger;

  
  fn();

  print("  OK");
}

test("Can track allocations even if a different debugger is already tracking " +
     "them.",
     () => {
       let d1r1 = dbg1.addDebuggee(root1);
       let d2r1 = dbg2.addDebuggee(root1);
       dbg1.memory.trackingAllocationSites = true;
       dbg2.memory.trackingAllocationSites = true;
       print(isTrackingAllocations(root1, d1r1), true);
       print(isTrackingAllocations(root1, d2r1), true);
     });

test("Removing root1 as a debuggee from all debuggers should disable the " +
     "allocation hook.",
     () => {
       dbg1.memory.trackingAllocationSites = true;
       let d1r1 = dbg1.addDebuggee(root1);
       dbg1.removeAllDebuggees();
       print(isTrackingAllocations(root1, d1r1), false);
     });

test("Adding a new debuggee to a debugger that is tracking allocations should " +
     "enable the hook for the new debuggee.",
     () => {
       dbg1.memory.trackingAllocationSites = true;
       let d1r1 = dbg1.addDebuggee(root1);
       print(isTrackingAllocations(root1, d1r1), true);
     });

test("Setting trackingAllocationSites to true should throw if the debugger " +
     "cannot install the allocation hooks for *every* debuggee.",
     () => {
       let d1r1 = dbg1.addDebuggee(root1);
       let d1r2 = dbg1.addDebuggee(root2);

       
       root2.enableShellAllocationMetadataBuilder();

       print(() => dbg1.memory.trackingAllocationSites = true,
                              Error);

       
       
       print(dbg1.memory.trackingAllocationSites, false);
       print(isTrackingAllocations(root1, d1r1), false);
       print(isTrackingAllocations(root2, d1r2), false);
     });
