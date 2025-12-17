const g = newGlobal({ newCompartment: true });

var map = g.eval("new WeakMap()");
var foo = {};
var bar = {};

WeakMap.prototype.getOrInsertComputed.call(map, foo, () => 2);
print(map.get(foo), 2);

map.getOrInsertComputed(bar, () => 3);
print(map.get(bar), 3);
