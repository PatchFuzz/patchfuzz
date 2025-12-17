var m = new Map;
m.set(42, undefined);
print(m.has(42), true);
print(m.get(42), undefined);

m.set(42, "wrong");
m.set(42);
print(m.has(42), true);
print(m.get(42), undefined);

m.set();
print(m.has(undefined), true);
print(m.get(undefined), undefined);
