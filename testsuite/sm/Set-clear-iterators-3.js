

load(libdir + "iteration.js");

var s = new Set();
var it = s[Symbol.iterator]();
assertIteratorDone(it, undefined);  
s.clear();
s.add("a");
assertIteratorDone(it, undefined);
