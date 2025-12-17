;

var map = new Map();
var iter0 = map[Symbol.iterator](), iter1 = map[Symbol.iterator]();
print(iter0, undefined);  
map.set(1, 2);
print(iter0, undefined);  
print(iter1, [1, 2]);     
