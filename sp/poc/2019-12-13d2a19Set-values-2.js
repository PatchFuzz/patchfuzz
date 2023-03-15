


;

var data = [1, 2, 3, 4];
var s = new Set(data);

var ki = s.keys();
assertIteratorNext(ki, 1);
assertIteratorNext(ki, 2);
assertIteratorNext(ki, 3);
assertIteratorNext(ki, 4);
assertIteratorDone(ki, undefined);

print([...s.keys()], data);
print([...s.values()], data);
print([...s.entries()], [[1, 1], [2, 2], [3, 3], [4, 4]]);
