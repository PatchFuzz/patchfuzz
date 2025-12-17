var m = new Map;
var key = {};


print(m.delete(key), false);
print(m.has(key), false);


print(m.set(key, 'x'), m);
print(m.delete(key), true);
print(m.has(key), false);
print(m.get(key), undefined);


print(m.delete(key), false);
print(m.has(key), false);
