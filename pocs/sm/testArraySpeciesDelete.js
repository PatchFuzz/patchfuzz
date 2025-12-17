delete Array[Symbol.species];
var a = [1, 2, 3].slice(1);
print(a.length, 2);
print(a[0], 2);
print(a[1], 3);
