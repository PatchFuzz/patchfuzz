var m = new Map;
m.set(NaN, "ok");
print(m.has(NaN), true);
print(m.get(NaN), "ok");
print(m.delete(NaN), true);
print(m.has(NaN), false);
print(m.get(NaN), undefined);

var s = new Set;
s.add(NaN);
print(s.has(NaN), true);
print(s.delete(NaN), true);
print(s.has(NaN), false);
