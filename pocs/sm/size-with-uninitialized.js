newGlobal({ newCompartment: true }).Debugger(this).memory.trackingAllocationSites = true;
for (let i = 0; i < 9; i++) {
  oomTest(function () {
    class C extends WebAssembly.Memory {}
    new C({
      initial: 0,
      maximum: 1,
      shared: 1,
    });
  });
}
