var s = new Set;
s.add(-0);
print(s.has(0), true);
print(s.has(-0), true);

print(s.delete(0), true);
print(s.has(-0), false);
print(s.has(0), false);

s.add(0);
print(s.has(0), true);
print(s.has(-0), true);
print(s.delete(-0), true);
print(s.has(-0), false);
print(s.has(0), false);

var m = new Map;
m.set(-0, 'x');
print(m.has(0), true);
print(m.get(0), 'x');
print(m.has(-0), true);
print(m.get(-0), 'x');

print(m.delete(0), true);
print(m.has(-0), false);
print(m.get(-0), undefined);
print(m.has(0), false);
print(m.get(0), undefined);

m.set(-0, 'x');
m.set(0, 'y');
print(m.has(0), true);
print(m.get(0), 'y');
print(m.has(-0), true);
print(m.get(-0), 'y');

print(m.delete(-0), true);
print(m.has(0), false);
print(m.get(0), undefined);
print(m.has(-0), false);
print(m.get(-0), undefined);
