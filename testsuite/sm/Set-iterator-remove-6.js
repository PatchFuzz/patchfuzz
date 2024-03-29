



load(libdir + "iteration.js");

var set = new Set();
for (var i = 0; i < 32; i++)
    set.add(i);
var iter = set[Symbol.iterator]();
assertIteratorNext(iter, 0);
for (var i = 0; i < 30; i++)
    set.delete(i);
assertEq(set.size, 2);
for (var i = 32; i < 100; i++)
    set.add(i);  

for (var i = 30; i < 100; i++)
    assertIteratorNext(iter, i);
assertIteratorDone(iter, undefined);
