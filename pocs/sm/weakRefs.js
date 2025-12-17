function testSameCompartmentWeakRef(
  targetReachable,
  weakRefReachable) {

  let target = {};

  let weakref = new WeakRef(target);
  print(weakref.deref(), target);

  if (!targetReachable) {
    target = undefined;
  }

  if (!weakRefReachable) {
    weakRef = undefined;
  }

  clearKeptObjects();
  gc();

  if (weakRefReachable) {
    if (targetReachable) {
      print(weakref.deref(), target);
    } else {
      print(weakref.deref(), undefined);
    }
  }
}

let serial = 0;

function testCrossCompartmentWeakRef(
  targetReachable,
  weakRefReachable,
  collectTargetZone,
  collectWeakRefZone,
  sameZone) {

  gc();

  let id = serial++;
  let global = newGlobal(sameZone ? {sameZoneAs: this} : {newCompartment: true});
  global.eval('var target = {};');
  global.target.id = id;

  let weakref = new WeakRef(global.target);
  print(weakref.deref(), global.target);

  if (!targetReachable) {
    global.target = undefined;
  }

  if (!weakRefReachable) {
    weakRef = undefined;
  }

  if (collectTargetZone || collectWeakRefZone) {
    clearKeptObjects();

    if (collectTargetZone) {
      schedulezone(global);
    }
    if (collectWeakRefZone) {
      schedulezone(this);
    }

    
    
    startgc(1, 'shrinking');
    while (gcstate() !== 'NotActive') {
      gcslice(1000, {dontStart: true});
    }
  }

  if (!(collectWeakRefZone && !weakRefReachable)) {
    if (collectTargetZone && !targetReachable) {
      print(weakref.deref(), undefined);
    } else if (targetReachable) {
      print(weakref.deref(), global.target);
    } else {
      
      
      print(weakref.deref() !== undefined, true);
      print(weakref.deref().id, id);
    }
  }
}

gczeal(0);

for (let targetReachable of [true, false]) {
  for (let weakRefReachable of [true, false]) {
    testSameCompartmentWeakRef(targetReachable, weakRefReachable);
  }
}

for (let targetReachable of [true, false]) {
  for (let weakRefReachable of [true, false]) {
    for (let collectTargetZone of [true, false]) {
      for (let collectWeakRefZone of [true, false]) {
        for (let sameZone of [true, false]) {
          if (sameZone && (collectTargetZone != collectWeakRefZone)) {
            continue;
          }

          testCrossCompartmentWeakRef(targetReachable, weakRefReachable,
                                      collectTargetZone, collectWeakRefZone, sameZone);
        }
      }
    }
  }
}
