;
;

var m = new Map([["a", 1]]);
var it = m[Symbol.iterator]();
print(it, ["a", 1]);
m.clear();
m.set("b", 2);
print(it, ["b", 2]);
print(it, undefined);
