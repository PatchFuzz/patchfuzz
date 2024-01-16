

load(libdir + 'asserts.js');

var allocTimes = [];

allocTimes.push(timeSinceCreation());

const root = newGlobal({newCompartment: true});
const dbg = new Debugger(root);

dbg.memory.trackingAllocationSites = true;
root.eval("this.alloc1 = {}");
allocTimes.push(timeSinceCreation());
root.eval("this.alloc2 = {}");
allocTimes.push(timeSinceCreation());
root.eval("this.alloc3 = {}");
allocTimes.push(timeSinceCreation());
root.eval("this.alloc4 = {}");
allocTimes.push(timeSinceCreation());

allocs = dbg.memory.drainAllocationsLog();
assertEq(allocs.length >= 4, true);
assertEq(allocs[0].timestamp >= allocTimes[0], true);
var seenAlloc = 0;
var lastIndexSeenAllocIncremented = 0;
for (i = 1; i < allocs.length; ++i) {
    assertEq(allocs[i].timestamp >= allocs[i - 1].timestamp, true);
    
    
    
    
    
    
    
    
    
    while (seenAlloc < allocTimes.length
           && allocs[i].timestamp >= allocTimes[seenAlloc]) {
        assertEq(i - lastIndexSeenAllocIncremented > 0, true);
        lastIndexSeenAllocIncremented = i;
        ++seenAlloc;
    }
}


assertEq(seenAlloc, allocTimes.length -1);
