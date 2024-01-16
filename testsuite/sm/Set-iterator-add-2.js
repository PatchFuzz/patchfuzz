

load(libdir + "iteration.js");

var set = new Set();
var iter0 = set[Symbol.iterator](), iter1 = set[Symbol.iterator]();
assertIteratorDone(iter0, undefined);  
set.add("x");
assertIteratorDone(iter0, undefined);  
assertIteratorNext(iter1, "x");  
