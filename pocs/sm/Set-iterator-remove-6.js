;

var set = new Set();
for (var i = 0; i < 32; i++)
    set.add(i);
var iter = set[Symbol.iterator]();
print(iter, 0);
for (var i = 0; i < 30; i++)
    set.delete(i);
print(set.size, 2);
for (var i = 32; i < 100; i++)
    set.add(i);  

for (var i = 30; i < 100; i++)
    print(iter, i);
print(iter, undefined);
