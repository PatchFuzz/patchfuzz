



load(libdir + "iteration.js");

var map = new Map();
for (var i = 0; i < 32; i++)
    map.set(i, i);
var iter = map[Symbol.iterator]();
assertIteratorNext(iter, [0, 0]);
for (var i = 0; i < 30; i++)
    map.delete(i);
assertEq(map.size, 2);
for (var i = 32; i < 100; i++)
    map.set(i, i);  

for (var i = 30; i < 100; i++)
    assertIteratorNext(iter, [i, i]);

assertIteratorDone(iter, undefined);
