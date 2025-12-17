var o = {};
Object.defineProperty(o, "a", {
    value: 0, configurable: true, writable: true, enumerable: false
});

var o2 = {};
Object.defineProperty(o2, "a", {
    value: 0, configurable: true, writable: true, enumerable: false
});


print(%HaveSameMap(o, o2));

o.y = 2;

for (var v in o) { print(v); }
o = {};
gc();

for (var v in o2) { print(v); }
