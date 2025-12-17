;

var map = new Map([['a', 1], ['b', 2]]);
var iter = map[Symbol.iterator]();
var a = iter.next(), b = iter.next();
print(a, ['a', 1], false);
print(b, ['b', 2], false);
print(a.value !== b.value, true);
var a1 = map[Symbol.iterator]();
print(a1, ['a', 1]);
print(a.value !== a1.value, true);
