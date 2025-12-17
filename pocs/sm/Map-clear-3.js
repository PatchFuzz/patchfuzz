var m = new Map();
for (var i = 0; i < 100; i++)
    m.set(i, i);
print(m.size, i);
m.clear();
print(m.size, 0);
m.set("a", 1);
print(m.get("a"), 1);
