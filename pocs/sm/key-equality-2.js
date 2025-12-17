var s = new Set;

s.add(17);
print(s.has("17"), false);
print(s.has(17), true);
s.add("17");
print(s.delete(17), true);
print(s.has("17"), true);
print(s.has(17), false);
