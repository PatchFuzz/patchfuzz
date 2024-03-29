


var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.eval(`
  function withAllocationMarkerOnStack(f) {
    (function () {
      var onStack = allocationMarker();
      f();
      return onStack; 
    }())
  }
`);

assertEq("AllocationMarker" in dbg.memory.takeCensus().objects, false,
         "There shouldn't exist any allocation markers in the census.");

var allocationMarkerCount;
g.withAllocationMarkerOnStack(() => {
  allocationMarkerCount = dbg.memory.takeCensus().objects.AllocationMarker.count;
});

assertEq(allocationMarkerCount, 1,
         "Should have one allocation marker in the census, because there " +
         "was one on the stack.");
