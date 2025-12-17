function testSameCompartmentWeakRef(
  targetIsObject,
  targetReachable,
  weakRefReachable) {

  let target;
  if (targetIsObject) {
    target = {};
  } else {
    target = Symbol();
  }

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
  targetIsObject,
  targetReachable,
  weakRefReachable,
  collectTargetZone,
  collectWeakRefZone,
  sameZone) {

  let id = serial++;
  let global = newGlobal(sameZone ? {sameZoneAs: this} : {newCompartment: true});
  if (targetIsObject) {
    global.eval(`var target = { id: ${id}};`);
  } else {
    global.eval(`var target = Symbol(${id});`);
  }

  let weakref = new WeakRef(global.target);
  

  clearKeptObjects();
  gc();

  if (!targetReachable) {
    global.target = undefined;
  }

  if (!weakRefReachable) {
    weakRef = undefined;
  }

  if (collectTargetZone || collectWeakRefZone) {

    if (collectTargetZone) {
      schedulezone(global);
      if (!targetIsObject) {
        schedulezone("atoms");
        
        
        
        schedulezone(this);
      }
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
    if (targetReachable) {
      print(weakref.deref(), global.target);
    } else if (collectTargetZone) {
      print(weakref.deref(), undefined);
    } else {
      
      
      print(weakref.deref() !== undefined, true);
      if (targetIsObject) {
        print(weakref.deref().id, id);
      } else {
        print(weakref.deref().description, id.toString());
      }
    }
  }
}

gczeal(0);

new WeakRef(Symbol());
new WeakRef(Symbol("foo"));

for (let targetIsObject of [true, false]) {
  for (let targetReachable of [true, false]) {
    for (let weakRefReachable of [true, false]) {
      testSameCompartmentWeakRef(targetIsObject, targetReachable, weakRefReachable);
    }
  }
}

for (let targetIsObject of [true, false]) {
  for (let targetReachable of [true, false]) {
    for (let weakRefReachable of [true, false]) {
      for (let collectTargetZone of [true, false]) {
        for (let collectWeakRefZone of [true, false]) {
          for (let sameZone of [true, false]) {
            if (sameZone && (collectTargetZone != collectWeakRefZone)) {
              continue;
            }

            testCrossCompartmentWeakRef(targetIsObject, targetReachable, weakRefReachable,
                                        collectTargetZone, collectWeakRefZone, sameZone);
          }
        }
      }
    }
  }
}
