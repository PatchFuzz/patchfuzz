var m = new Map([["a", 1], ["b", 2], ["c", 3], ["d", 4]]);
for (var [k, v] of m)
    if (k !== "c")
        m.delete(k);
m.clear();
print(m.size, 0);
print(m.has("c"), false);
print(m.has("d"), false);
