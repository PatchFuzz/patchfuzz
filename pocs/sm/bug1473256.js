var a1 = Reflect.construct(Array, [], Object);
var g = newGlobal({sameZoneAs: this});
var a2 = new g.Array(1, 2, 3);
print(a1.length, 0);
print(a2.length, 3);
