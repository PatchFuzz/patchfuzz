var key = -/a/g.missingProperty;

var s = new Set();
s.add(key, 17);
print(s.has(key), true);
print(s.has(-key), true);
print(s.has(NaN), true);

s.delete(-key);
print(s.has(key), false);
print(s.has(-key), false);
print(s.has(NaN), false);

s.add(-key, 17);
print(s.has(key), true);
print(s.has(-key), true);
print(s.has(NaN), true);

s.delete(NaN);
print(s.has(key), false);
print(s.has(-key), false);
print(s.has(NaN), false);

s.add(NaN, 17);
print(s.has(key), true);
print(s.has(-key), true);
print(s.has(NaN), true);

s.delete(key);
print(s.has(key), false);
print(s.has(-key), false);
print(s.has(NaN), false);
