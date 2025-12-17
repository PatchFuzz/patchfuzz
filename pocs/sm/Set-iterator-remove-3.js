;

var set = new Set("abcd");
var iter = set[Symbol.iterator]();
print(iter, "a");
print(iter, "b");
set.delete("c");
set.delete("b");
print(iter, "d");
print(iter, undefined);
