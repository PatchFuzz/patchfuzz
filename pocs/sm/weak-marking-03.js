gczeal(0);



var testRestriction = scriptArgs[0];
printErr(`testRestriction is ${testRestriction || '(run all tests)'}`);

function runtest(func) {
  if (testRestriction && ! func.name.includes(testRestriction)) {
    print("\Skipping " + func.name);
  } else {
    print("\nRunning " + func.name);
    func();
  }
}

function reportMarks(prefix = "") {
  const marks = getMarks();
  const current = currentgc();
  const markstr = marks.join("/");
  print(`${prefix}[${current.incrementalState}/${current.sweepGroup}@${current.queuePos}] ${markstr}`);
  return markstr;
}

function startGCMarking(untilQueuePos) {
  startgc(100000);
  while (gcstate() === "Prepare" || gcstate() === "MarkRoots") {
    gcslice(100000);
  }
  
  
  
  while (currentgc().queuePos < untilQueuePos) {
    gcslice(1000);
  }

}

function purgeKey() {
  const m = new WeakMap();
  const vals = {};
  vals.key = Object.create(null);
  vals.val = Object.create(null);
  m.set(vals.key, vals.val);

  minorgc();

  addMarkObservers([m, vals.key, vals.val]);

  enqueueMark(m);
  enqueueMark("yield");

  enqueueMark(vals.key);
  enqueueMark("yield");

  vals.key = vals.val = null;

  startGCMarking(2);
  
  print(getMarks().join("/"), "black/unmarked/unmarked",
           "marked the map black");

  gcslice(100000);
  print(getMarks().join("/"), "black/black/unmarked",
           "key is now marked");

  
  
  m.delete(nondeterministicGetWeakMapKeys(m)[0]);

  finishgc(); 
  print(getMarks().join("/"), "black/black/black",
           "at end, value is marked too");

  clearMarkQueue();
  clearMarkObservers();
}

if (this.enqueueMark)
  runtest(purgeKey);

function removeKey() {
  reportMarks("removeKey start: ");

  const m = new WeakMap();
  const vals = {};
  vals.key = Object.create(null);
  vals.val = Object.create(null);
  m.set(vals.key, vals.val);

  minorgc();

  addMarkObservers([m, vals.key, vals.val]);

  enqueueMark(m);
  enqueueMark("yield");

  startGCMarking(2);
  reportMarks("first: ");
  var marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "unmarked", "key not marked yet");
  print(marks[2], "unmarked", "value not marked yet");
  m.delete(vals.key);

  finishgc(); 
  reportMarks("done: ");
  marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "black", "key is black");
  print(marks[2], "black", "value is black");

  
  m.set(vals.key, vals.val);
  vals.key = vals.val = null;
  startGCMarking(2);
  marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "unmarked", "key not marked yet");
  print(marks[2], "unmarked", "value not marked yet");

  
  
  
  m.delete(nondeterministicGetWeakMapKeys(m)[0]);

  finishgc();
  marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "black", "key was blackened by lookup read barrier during deletion");
  print(marks[2], "black", "value is black because map and key are black");

  clearMarkQueue();
  clearMarkObservers();
}

if (this.enqueueMark)
  runtest(removeKey);













function nukeMarking() {
  const g1 = newGlobal({newCompartment: true});

  const vals = {};
  vals.map = new WeakMap();
  vals.key = g1.eval("Object.create(null)");
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);
  vals.val = null;
  gc();

  
  enqueueMark(vals.map);
  enqueueMark("yield");
  
  enqueueMark(vals.key);
  enqueueMark("enter-weak-marking-mode");

  
  startgc(1000000);
  while (gcstate() === "Prepare" || gcstate() === "MarkRoots") {
    gcslice(100000);
  }
  print(gcstate(), "Mark", "expected to yield after marking map");
  
  nukeCCW(vals.key);
  
  gcslice();

  clearMarkQueue();
}

if (this.enqueueMark)
  runtest(nukeMarking);











function nukeMarkingSweepGroups() {
  
  
  const g1 = newGlobal({newCompartment: true});
  const host = newGlobal({newCompartment: true});
  host.g1 = g1;
  host.eval(`
  const vals = {};
  vals.map = new WeakMap();
  vals.key = g1.eval("Object.create(null)");
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);
  vals.val = null;
  gc();

  
  enqueueMark(vals.map);
  enqueueMark("yield");
  
  enqueueMark(vals.key);
  enqueueMark("enter-weak-marking-mode");

  
  startgc(1);
  while (gcstate() !== "Mark") {
    gcslice(100000);
  }
  print(gcstate(), "Mark", "expected to yield after marking map");
  
  nukeAllCCWs();
  
  while (gcstate() === "Mark") {
    gcslice(1000);
  }
  gcslice();

  clearMarkQueue();
  `);
}

if (this.enqueueMark)
  runtest(nukeMarkingSweepGroups);

function transplantMarking() {
  const g1 = newGlobal({newCompartment: true});

  const vals = {};
  vals.map = new WeakMap();
  let {object, transplant} = transplantableObject();
  vals.key = object;
  object = null;
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);
  vals.val = null;
  gc();

  
  enqueueMark(vals.map);
  enqueueMark("yield");
  
  enqueueMark(vals.key);
  enqueueMark("enter-weak-marking-mode");

  
  startgc(1000000);
  while (gcstate() !== "Mark") {
    gcslice(100000);
  }
  print(gcstate(), "Mark", "expected to yield after marking map");
  
  transplant(g1);
  
  gcslice();

  clearMarkQueue();
}

if (this.enqueueMark)
  runtest(transplantMarking);









function grayMarkingMapFirst() {
  const g = newGlobal({newCompartment: true});
  const vals = {};
  vals.map = new WeakMap();
  vals.key = g.eval("Object.create(null)");
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);

  g.delegate = vals.key;
  g.eval("dummy = Object.create(null)");
  g.eval("grayRoot().push(delegate, dummy)");
  addMarkObservers([vals.map, vals.key]);
  g.addMarkObservers([vals.key, g.dummy]);
  addMarkObservers([vals.val]);

  gc();

  enqueueMark(vals.map);
  enqueueMark("yield"); 

  g.enqueueMark(vals.key);
  enqueueMark("yield"); 

  vals.val = null;
  vals.key = null;
  g.delegate = null;
  g.dummy = null;

  const showmarks = () => {
    print("[map,key,delegate,graydummy,value] marked " + JSON.stringify(getMarks()));
  };

  print("Starting incremental GC");
  startGCMarking(2);
  
  showmarks();
  var marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "unmarked", "key is not marked yet");
  print(marks[2], "unmarked", "delegate is not marked yet");

  gcslice(100000);
  
  showmarks();
  marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "unmarked", "key is not marked yet");
  print(marks[2], "black", "delegate is black");

  gcslice();
  
  
  showmarks();
  marks = getMarks();
  print(marks[0], "black", "map is black");
  print(marks[1], "black", "delegate marked key black because of weakmap");
  print(marks[2], "black", "delegate is still black");
  print(marks[3], "gray", "basic gray marking is working");
  print(marks[4], "black", "black map + black delegate => black value");

  clearMarkQueue();
  clearMarkObservers();
  grayRoot().length = 0;
  g.eval("grayRoot().length = 0");
}

if (this.enqueueMark)
  runtest(grayMarkingMapFirst);

function grayMarkingMapLast() {
  const g = newGlobal({newCompartment: true});
  const vals = {};
  vals.map = new WeakMap();
  vals.key = g.eval("Object.create(null)");
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);

  vals.map2 = new WeakMap();
  vals.key2 = g.eval("Object.create(null)");
  vals.val2 = Object.create(null);
  vals.map2.set(vals.key2, vals.val2);

  g.delegate = vals.key;
  g.eval("grayRoot().push(delegate)");
  addMarkObservers([vals.map, vals.key]);
  g.addMarkObservers([vals.key]);
  addMarkObservers([vals.val]);

  grayRoot().push(vals.key2);
  addMarkObservers([vals.map2, vals.key2]);
  g.addMarkObservers([vals.key2]);
  addMarkObservers([vals.val2]);

  const labels = ["map", "key", "delegate", "value", "map2", "key2", "delegate2", "value2"];

  gc();

  g.enqueueMark(vals.key);
  g.enqueueMark(vals.key2);
  enqueueMark("yield"); 

  vals.val = null;
  vals.key = null;
  g.delegate = null;

  vals.map2 = null; 
  vals.key2 = null;
  vals.val2 = null;
  g.delegate2 = null;

  const labeledMarks = () => {
    const info = {};
    const marks = getMarks();
    for (let i = 0; i < labels.length; i++)
      info[labels[i]] = marks[i];
    return info;
  };

  const showmarks = () => {
    print("Marks:");
    for (const [label, mark] of Object.entries(labeledMarks()))
      print(`  ${label}: ${mark}`);
  };

  print("Starting incremental GC");
  startGCMarking(3);
  
  showmarks();
  var marks = labeledMarks();
  print(marks.map, "unmarked", "map is unmarked");
  print(marks.key, "unmarked", "key is not marked yet");
  print(marks.delegate, "black", "delegate is black");
  print(marks.map2, "unmarked", "map2 is unmarked");
  print(marks.key2, "unmarked", "key2 is not marked yet");
  print(marks.delegate2, "black", "delegate2 is black");

  gcslice();
  
  
  showmarks();
  marks = labeledMarks();
  print(marks.map, "black", "map is black");
  print(marks.key, "black", "delegate marked key black because of weakmap");
  print(marks.delegate, "black", "delegate is still black");
  print(marks.value, "black", "black map + black delegate => black value");
  print(marks.map2, "dead", "map2 is dead");
  print(marks.key2, "gray", "key2 marked gray, map2 had no effect");
  print(marks.delegate2, "black", "delegate artificially marked black via mark queue");
  print(marks.value2, "dead", "dead map + black delegate => dead value");

  clearMarkQueue();
  clearMarkObservers();
  grayRoot().length = 0;
  g.eval("grayRoot().length = 0");

  return vals; 
}

if (this.enqueueMark)
  runtest(grayMarkingMapLast);

function grayMapKey() {
  const vals = {};
  vals.m = new WeakMap();
  vals.key = Object.create(null);
  vals.val = Object.create(null);
  vals.m.set(vals.key, vals.val);

  
  
  gc();

  addMarkObservers([vals.m, vals.key, vals.val]);

  
  
  enqueueMark("set-color-gray");
  enqueueMark(vals.m);
  enqueueMark("unset-color");
  enqueueMark("yield");

  
  
  vals.m = null;

  enqueueMark(vals.key);
  enqueueMark("yield");

  vals.key = vals.val = null;

  startGCMarking(4);
  print(getMarks().join("/"), "gray/unmarked/unmarked",
           "marked the map gray");

  gcslice(100000);
  print(getMarks().join("/"), "gray/black/unmarked",
           "key is now marked black");

  finishgc(); 

  print(getMarks().join("/"), "gray/black/gray",
           "at end: black/gray => gray");

  clearMarkQueue();
  clearMarkObservers();
}

if (this.enqueueMark)
  runtest(grayMapKey);

function grayKeyMap() {
  const vals = {};
  vals.m = new WeakMap();
  vals.key = Object.create(null);
  vals.val = Object.create(null);
  vals.m.set(vals.key, vals.val);

  addMarkObservers([vals.m, vals.key, vals.val]);

  enqueueMark(vals.key);
  enqueueMark("yield");

  
  enqueueMark("set-color-gray");
  enqueueMark(vals.m);
  enqueueMark("unset-color");
  enqueueMark("yield");

  enqueueMark("set-color-black");
  enqueueMark(vals.m);
  enqueueMark("unset-color");

  
  
  vals.m = null;

  vals.key = vals.val = null;

  
  
  schedulezone(vals);

  startGCMarking();
  
  reportMarks("1: ");
  print(getMarks().join("/"), "unmarked/black/unmarked",
           "marked key black");

  
  
  gcslice(100000);
  reportMarks("2: ");
  print(getMarks().join("/"), "unmarked/black/unmarked",
           "marked key black, yield before sweeping");

  gcslice(100000);
  reportMarks("3: ");
  print(getMarks().join("/"), "gray/black/gray",
           "marked the map gray, which marked the value when map scanned");

  finishgc(); 
  reportMarks("4: ");
  print(getMarks().join("/"), "black/black/black",
           "further marked the map black, so value should also be blackened");

  clearMarkQueue();
  clearMarkObservers();
}

if (this.enqueueMark)
  runtest(grayKeyMap);


















function blackDuringGray() {
  const g = newGlobal({newCompartment: true});
  const vals = {};
  vals.map = new WeakMap();
  vals.key = g.eval("Object.create(null)");
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);

  g.delegate = vals.key;
  addMarkObservers([vals.map, vals.key]);
  g.addMarkObservers([vals.key]);
  addMarkObservers([vals.val]);
  

  gc();

  g.enqueueMark(vals.key); 
  enqueueMark("yield"); 

  
  
  enqueueMark("set-color-gray");
  enqueueMark(vals.map); 

  vals.map = null;
  vals.val = null;
  vals.key = null;
  g.delegate = null;

  const showmarks = () => {
    print("[map,key,delegate,value] marked " + JSON.stringify(getMarks()));
  };

  print("Starting incremental GC");
  startGCMarking(2);
  
  showmarks();
  var marks = getMarks();
  print(marks[0], "unmarked", "map is not marked yet");
  print(marks[1], "unmarked", "key is not marked yet");
  print(marks[2], "black", "delegate is black");
  print(marks[3], "unmarked", "values is not marked yet");

  finishgc();
  showmarks();
  marks = getMarks();
  print(marks[0], "gray", "map is gray");
  print(marks[1], "gray", "gray map + black delegate should mark key gray");
  print(marks[2], "black", "delegate is still black");
  print(marks[3], "gray", "gray map + gray key => gray value");

  clearMarkQueue();
  clearMarkObservers();
  grayRoot().length = 0;
  g.eval("grayRoot().length = 0");
}

if (this.enqueueMark)
  runtest(blackDuringGray);


function blackDuringGrayImplicit() {
  const g = newGlobal({newCompartment: true});
  const vals = {};
  vals.map = new WeakMap();
  vals.key = g.eval("Object.create(null)");
  vals.val = Object.create(null);
  vals.map.set(vals.key, vals.val);

  g.delegate = vals.key;
  addMarkObservers([vals.map, vals.key]);
  g.addMarkObservers([vals.key]);
  addMarkObservers([vals.val]);
  

  gc();

  
  
  enqueueMark("set-color-gray");
  enqueueMark(vals.map); 
  enqueueMark("yield"); 

  enqueueMark("set-color-black");
  g.enqueueMark(vals.key); 

  vals.map = null;
  vals.val = null;
  vals.key = null;
  g.delegate = null;

  const showmarks = () => {
    print("[map,key,delegate,value] marked " + JSON.stringify(getMarks()));
  };

  print("Starting incremental GC");
  startGCMarking(3);
  
  showmarks();
  var marks = getMarks();
  print(marks[0], "gray", "map is gray");
  print(marks[1], "unmarked", "key is not marked yet");
  print(marks[2], "unmarked", "delegate is not marked yet");
  print(marks[3], "unmarked", "value is not marked yet");

  finishgc();
  showmarks();
  marks = getMarks();
  print(marks[0], "gray", "map is gray");
  print(marks[1], "gray", "gray map + black delegate should mark key gray");
  print(marks[2], "black", "delegate is black");
  print(marks[3], "gray", "gray map + gray key => gray value via delegate -> value");

  clearMarkQueue();
  clearMarkObservers();
  grayRoot().length = 0;
  g.eval("grayRoot().length = 0");
}

if (this.enqueueMark)
  runtest(blackDuringGrayImplicit);
