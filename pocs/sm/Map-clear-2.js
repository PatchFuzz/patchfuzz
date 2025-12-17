var m = new Map([["a", "b"], ["b", "c"]]);
print(m.size, 2);
m.clear();
print(m.size, 0);
print(m.has("a"), false);
print(m.get("a"), undefined);
print(m.delete("a"), false);
print(m.has("b"), false);
for (var pair of m)
    throw "FAIL";  

m.set("c", "d");
print(m.size, 1);
print(m.has("a"), false);
print(m.has("b"), false);
