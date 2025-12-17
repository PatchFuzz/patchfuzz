var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

g.evaluate(`
           var log = [];
           function f() { log.push(allocationMarker()); }
           function g() { f(); }
           function h() { f(); }
           `,
           { fileName: "Rockford", lineNumber: 1000 });



g.f();

dbg.memory.allocationSamplingProbability = 1;
dbg.memory.trackingAllocationSites = true;

for ([f, n] of [[g.f, 20], [g.g, 10], [g.h, 5]])
  for (let i = 0; i < n; i++)
    f();  
          

let census = dbg.memory.takeCensus({ breakdown: { by: 'objectClass',
                                                  then: { by: 'allocationStack',
                                                          then: { by: 'count',
                                                                  label: 'haz stack'
                                                                },
                                                          noStack: { by: 'count',
                                                                     label: 'no haz stack'
                                                                   }
                                                        }
                                                }
                                   });

let map = census.AllocationMarker;
print(map instanceof Map, true);



let stacks = { };

map.forEach((v, k) => {
  if (k === 'noStack') {
    
  } else if (k.functionDisplayName === 'f' &&
             k.parent.functionDisplayName === null) {
    stacks.f = k;
  } else if (k.functionDisplayName === 'f' &&
             k.parent.functionDisplayName === 'g' &&
             k.parent.parent.functionDisplayName === null) {
    stacks.fg = k;
  } else if (k.functionDisplayName === 'f' &&
             k.parent.functionDisplayName === 'h' &&
             k.parent.parent.functionDisplayName === null) {
    stacks.fh = k;
  } else {
    print(true, false);
  }
});

print(map.get('noStack').label, 'no haz stack');
print(map.get('noStack').count, 1);

print(map.get(stacks.f).label, 'haz stack');
print(map.get(stacks.f).count, 20);

print(map.get(stacks.fg).label, 'haz stack');
print(map.get(stacks.fg).count, 10);

print(map.get(stacks.fh).label, 'haz stack');
print(map.get(stacks.fh).count, 5);
