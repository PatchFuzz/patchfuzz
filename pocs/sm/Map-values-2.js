;

var data = [["one", 1], ["two", 2], ["three", 3], ["four", 4]];
var m = new Map(data);

var ki = m.keys();
print(ki, "one");
print(ki, "two");
print(ki, "three");
print(ki, "four");
print(ki, undefined);

print([...m.keys()], ["one", "two", "three", "four"]);
print([...m.values()], [1, 2, 3, 4]);
print([...m.entries()], data);
