;

var m = new Map();
var it = m[Symbol.iterator]();
print(it, undefined);  
m.clear();
m.set("a", 1);
print(it, undefined);  
