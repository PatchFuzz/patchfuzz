




gczeal(0);
gcparam('minNurseryBytes', 1024 * 1024);
gcparam('maxNurseryBytes', 1024 * 1024);

function startIncrementalGC() {
  startgc(1, 'shrinking');
  while (gcstate() === "Prepare") {
    gcslice(1);
  }
}

function syncIncrementalGC() {
  startIncrementalGC();
  finishgc();
}


function basicSweeping() {
  gc();

  var wm1 = new WeakMap();
  wm1.set({'name': 'obj1'}, {'name': 'val1'});
  var hold = {'name': 'obj2'};
  wm1.set(hold, {'name': 'val2'});
  wm1.set({'name': 'obj3'}, {'name': 'val3'});

  syncIncrementalGC();

  assertEq(wm1.get(hold).name, 'val2');
  assertEq(nondeterministicGetWeakMapKeys(wm1).length, 1);
}

basicSweeping();


function weakGraph() {
  gc();

  var wm1 = new WeakMap();
  var obj1 = {'name': 'obj1'};
  var obj2 = {'name': 'obj2'};
  var obj3 = {'name': 'obj3'};
  var obj4 = {'name': 'obj4'};
  var clear = {'name': ''}; 

  wm1.set(obj2, obj3);
  wm1.set(obj3, obj1);
  wm1.set(obj4, obj1); 
  obj1 = obj3 = obj4 = undefined;

  syncIncrementalGC();

  assertEq(obj2.name, "obj2");
  assertEq(wm1.get(obj2).name, "obj3");
  assertEq(wm1.get(wm1.get(obj2)).name, "obj1");
  print(nondeterministicGetWeakMapKeys(wm1).map(o => o.name).join(","));
  assertEq(nondeterministicGetWeakMapKeys(wm1).length, 2);
}

weakGraph();


function deadWeakMap() {
  gc();

  var wm1 = new WeakMap();
  var obj1 = makeFinalizeObserver();
  var obj2 = {'name': 'obj2'};
  var obj3 = {'name': 'obj3'};
  var obj4 = {'name': 'obj4'};
  var clear = {'name': ''}; 

  wm1.set(obj2, obj3);
  wm1.set(obj3, obj1);
  wm1.set(obj4, obj1); 
  var initialCount = finalizeCount();
  obj1 = obj3 = obj4 = undefined;
  wm1 = undefined;

  syncIncrementalGC();

  assertEq(obj2.name, "obj2");
  assertEq(finalizeCount(), initialCount + 1);
}

deadWeakMap();







function deadKeys() {
  gc();

  var wm1 = new WeakMap();
  var obj1 = makeFinalizeObserver();
  var obj2 = {'name': 'obj2'};
  var obj3 = makeFinalizeObserver();
  var clear = {}; 

  wm1.set(obj1, obj1);
  wm1.set(obj3, obj2);
  obj1 = obj3 = undefined;
  var initialCount = finalizeCount();

  syncIncrementalGC();

  assertEq(finalizeCount(), initialCount + 2);
  assertEq(nondeterministicGetWeakMapKeys(wm1).length, 0);
}

deadKeys();








function weakKeysRealloc() {
  gc();

  var wm1 = new WeakMap;
  var wm2 = new WeakMap;
  var wm3 = new WeakMap;
  var obj1 = {'name': 'obj1'};
  var obj2 = {'name': 'obj2'};
  wm1.set(obj1, wm2);
  wm2.set(obj2, wm3);
  for (var i = 0; i < 10000; i++) {
    wm3.set(Object.create(null), wm2);
  }
  wm3.set(Object.create(null), makeFinalizeObserver());

  wm2 = undefined;
  wm3 = undefined;
  obj2 = undefined;

  var initialCount = finalizeCount();
  syncIncrementalGC();
  assertEq(finalizeCount(), initialCount + 1);
}

weakKeysRealloc();





function deletedKeys() {
  gc();

  var wm = new WeakMap;
  var g = newGlobal();

  for (var i = 0; i < 1000; i++)
    wm.set(g.Object.create(null), i);

  startIncrementalGC();

  for (var key of nondeterministicGetWeakMapKeys(wm)) {
    if (wm.get(key) % 2)
      wm.delete(key);
  }

  gc();
}

deletedKeys();


function incrementalAdds() {
  gc();

  var initialCount = finalizeCount();

  var wm1 = new WeakMap;
  var wm2 = new WeakMap;
  var wm3 = new WeakMap;
  var obj1 = {'name': 'obj1'};
  var obj2 = {'name': 'obj2'};
  wm1.set(obj1, wm2);
  wm2.set(obj2, wm3);
  for (var i = 0; i < 10000; i++) {
    wm3.set(Object.create(null), wm2);
  }
  wm3.set(Object.create(null), makeFinalizeObserver());
  obj2 = undefined;

  var obj3 = [];
  startIncrementalGC();
  var M = 10;
  var N = 800;
  for (var j = 0; j < M; j++) {
    for (var i = 0; i < N; i++)
      wm3.set(Object.create(null), makeFinalizeObserver()); 
    for (var i = 0; i < N; i++) {
      obj3.push({'name': 'obj3'});
      wm1.set(obj3[obj3.length - 1], makeFinalizeObserver()); 
    }
    gcslice();
  }

  wm2 = undefined;
  wm3 = undefined;

  gc();
  print("initialCount = " + initialCount);
  assertEq(finalizeCount(), initialCount + 1 + M * N);
}

incrementalAdds();
