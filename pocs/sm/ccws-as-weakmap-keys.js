gczeal(0);

function mapSize(wm) {
  
  
  return nondeterministicGetWeakMapSize(wm);
}

let keyZone = newGlobal({newCompartment: true});
let mapZone = newGlobal({newCompartment: true});

printErr("Test 1: Full GC");

keyZone.eval('var key = makeFinalizeObserver();');
mapZone.eval('var map = new WeakMap;');
mapZone.map.set(keyZone.key, {});
let initialCount = finalizeCount();
print(mapSize(mapZone.map), 1);
gc();
print(finalizeCount(), initialCount);
print(mapSize(mapZone.map), 1);
keyZone.key = undefined;
gc();
print(finalizeCount(), initialCount + 1);
print(mapSize(mapZone.map), 0);
mapZone.map = undefined;
gc();

printErr("Test 2: Zone GC");
keyZone.eval('var key = makeFinalizeObserver();');
mapZone.eval('var map = new WeakMap;');
mapZone.keyZone = keyZone;
mapZone.eval('map.set(keyZone.key, {});');
mapZone.keyZone = undefined;
print(mapSize(mapZone.map), 1);
initialCount = finalizeCount();

printErr("  2.1 Setup");
gc();
keyZone.key = undefined;
print(finalizeCount(), initialCount);
print(mapSize(mapZone.map), 1);

printErr("  2.2 Collect only main zone (key not collected)");
gc(this);
print(finalizeCount(), initialCount);
print(mapSize(mapZone.map), 1);

printErr("  2.3 Collect only map zone (key not collected)");
gc(mapZone);
print(finalizeCount(), initialCount);
print(mapSize(mapZone.map), 1);

printErr("  2.4 Collect only key zone (key not collected)");
gc(keyZone);
print(finalizeCount(), initialCount);
print(mapSize(mapZone.map), 1);

printErr("  2.5 Collect key zone and map zone (key collected)");
schedulezone(keyZone);
schedulezone(mapZone);
gc('zone');
print(finalizeCount(), initialCount + 1);
print(mapSize(mapZone.map), 0);
