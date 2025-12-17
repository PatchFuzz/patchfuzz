gczeal(0);
gczeal('CheckHeapAfterGC');

function makeSymbol(name) {
  return Symbol(name);
}

function mapSize(wm) {
  return nondeterministicGetWeakMapSize(wm);
}


printErr("Test 1");
let wm = new WeakMap;
print(mapSize(wm), 0);
let k = makeSymbol('test1');
wm.set(k, {});
print(mapSize(wm), 1);
gc();
print(mapSize(wm), 1);
k = undefined;
gc();
print(mapSize(wm), 0);
wm = undefined;
gc();


printErr("Test 2");
let keyZone = newGlobal({newCompartment: true});
keyZone.key = makeSymbol('test2');
let mapZone = newGlobal({newCompartment: true});
mapZone.map = undefined;
mapZone.eval(`map = new WeakMap;`);
mapZone.map.set(keyZone.key, {});
print(mapSize(mapZone.map), 1);
gc();
print(mapSize(mapZone.map), 1);
keyZone.key = undefined;
gc();
print(mapSize(mapZone.map), 0);
keyZone = undefined;
mapZone = undefined;
gc();


printErr("Test 3");
keyZone = newGlobal({newCompartment: true});
mapZone = newGlobal({newCompartment: true});
keyZone.eval('var key = Symbol("test2");');
mapZone.eval(`var map = new WeakMap;`);
mapZone.keyZone = keyZone;
mapZone.eval('map.set(keyZone.key, {});');
mapZone.keyZone = undefined;
gc();
print(mapSize(mapZone.map), 1);

printErr("  3.1 Setup");
keyZone.key = undefined;

printErr("  3.2 Collect only main zone");
gc(this);
print(mapSize(mapZone.map), 1);

printErr("  3.3 Collect only map zone");
gc(mapZone);
print(mapSize(mapZone.map), 1);

printErr("  3.4 Collect only key zone");
gc(keyZone);



print(mapSize(mapZone.map), 1);

printErr("  3.5 Collect map zone and atoms zone (entry not removed)");
schedulezone(mapZone);
schedulezone('atoms');
gc('zone');
print(mapSize(mapZone.map), 1);

printErr("  3.6 Collect key zone and atoms zone (key no longer referenced)");
schedulezone(keyZone);
schedulezone('atoms');
gc('zone');
print(mapSize(mapZone.map), 1);

printErr("  3.7 Collect only atoms zone (nothing collected)");
schedulezone('atoms');
gc('zone');
print(mapSize(mapZone.map), 1);

printErr("  3.8 Collect only map zone (nothing collected)");
gc(mapZone);
print(mapSize(mapZone.map), 1);

printErr("  3.9 Collect map zone and atoms zone (entry collected)");
schedulezone(mapZone);
schedulezone('atoms');
gc('zone');
print(mapSize(mapZone.map), 0);

printErr("  3.10 Collect all zones (nothing more collected)");
gc();
print(mapSize(mapZone.map), 0);
