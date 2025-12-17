var m = new Map();
m.set('a', 0);
print(m.size, 1);
m.set('a', 0);
print(m.size, 1);
m.set('a', undefined);
print(m.size, 1);

m.set('b', 2);
print(m.size, 2);
m.set('a', 1);
print(m.size, 2);
