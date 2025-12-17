;

var data = [1, 2, 3, 4];
var s = new Set(data);

var ki = s.keys();
print(ki, 1);
print(ki, 2);
print(ki, 3);
print(ki, 4);
print(ki, undefined);

print([...s.keys()], data);
print([...s.values()], data);
print([...s.entries()], [[1, 1], [2, 2], [3, 3], [4, 4]]);
