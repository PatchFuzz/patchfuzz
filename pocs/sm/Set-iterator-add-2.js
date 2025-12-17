;

var set = new Set();
var iter0 = set[Symbol.iterator](), iter1 = set[Symbol.iterator]();
print(iter0, undefined);  
set.add("x");
print(iter0, undefined);  
print(iter1, "x");  
