;

var s = new Set(["a"]);
var it = s[Symbol.iterator]();
print(it, "a");
s.clear();
s.add("b");
print(it, "b");
print(it, undefined);
