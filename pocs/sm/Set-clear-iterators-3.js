;

var s = new Set();
var it = s[Symbol.iterator]();
print(it, undefined);  
s.clear();
s.add("a");
print(it, undefined);
