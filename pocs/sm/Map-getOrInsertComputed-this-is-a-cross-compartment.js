const g = newGlobal({ newCompartment: true });

var map = g.eval("new Map()");

Map.prototype.getOrInsertComputed.call(map, 1, () => 2);
print(map.get(1), 2);

map.getOrInsertComputed(2, () => 3);
print(map.get(2), 3);
