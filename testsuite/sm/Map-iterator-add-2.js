

load(libdir + "iteration.js");

var map = new Map();
var iter0 = map[Symbol.iterator](), iter1 = map[Symbol.iterator]();
assertIteratorDone(iter0, undefined);  
map.set(1, 2);
assertIteratorDone(iter0, undefined);  
assertIteratorNext(iter1, [1, 2]);     
