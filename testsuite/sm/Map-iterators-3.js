

load(libdir + "iteration.js");

var m = new Map();
var it = m[Symbol.iterator]();
assertIteratorDone(it, undefined);  
m.clear();
m.set("a", 1);
assertIteratorDone(it, undefined);  
