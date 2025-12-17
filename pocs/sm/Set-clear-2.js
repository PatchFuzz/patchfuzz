var s = new Set(["x", "y", "z", "z", "y"]);
print(s.size, 3);
s.clear();
print(s.size, 0);
print(s.has("x"), false);
print(s.delete("x"), false);
print(s.has("z"), false);
for (var v of s)
    throw "FAIL";  

s.add("y");
print(s.size, 1);
print(s.has("x"), false);
print(s.has("z"), false);
