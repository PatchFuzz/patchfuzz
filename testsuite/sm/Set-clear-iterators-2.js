

load(libdir + "iteration.js");

var s = new Set(["a"]);
var it = s[Symbol.iterator]();
assertIteratorNext(it, "a");
s.clear();
s.add("b");
assertIteratorNext(it, "b");
assertIteratorDone(it, undefined);
