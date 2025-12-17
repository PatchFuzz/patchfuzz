var s = new Set(["a", "b", "c", "d"]);
for (var v of s)
    if (v !== "c")
        s.delete(v);
s.clear();
print(s.size, 0);
print(s.has("c"), false);
print(s.has("d"), false);
