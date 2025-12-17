let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

let sizeOfAM = byteSize(allocationMarker());


g.eval('var hold = allocationMarker();');
let census = dbg.memory.takeCensus({ breakdown: { by: 'objectClass' } });
print(census.AllocationMarker.count, 1);
print(census.AllocationMarker.bytes, sizeOfAM);

g.evaluate(`
           var objs = [];
           function fnerd() {
             objs.push(allocationMarker());
             for (let i = 0; i < 10; i++)
               objs.push(allocationMarker());
           }
           `,
           { fileName: 'J. Edgar Hoover', lineNumber: 2000 });

dbg.memory.allocationSamplingProbability = 1;
dbg.memory.trackingAllocationSites = true;

g.hold = null;
g.fnerd();

census = dbg.memory.takeCensus({
  breakdown: { by: 'objectClass',
               then: { by: 'allocationStack' }
             }
});

let seen = 0;
census.AllocationMarker.forEach((v, k) => {
  print(k.functionDisplayName, 'fnerd');
  print(k.source, 'J. Edgar Hoover');
  switch (k.line) {
  case 2003:
    print(v.count, 1);
    print(v.bytes >= sizeOfAM, true);
    seen++;
    break;

  case 2005:
    print(v.count, 10);
    print(v.bytes >= 10 * sizeOfAM, true);
    seen++;
    break;

  default: print(true, false);
  }
});

print(seen, 2);
