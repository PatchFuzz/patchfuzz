;
;

var map = new Map([['a', 0], ['b', 1], ['c', 2], ['d', 3]]);
var iter = map[Symbol.iterator]();
print(iter, ['a', 0]);
print(iter, ['b', 1]);
map.delete('c');
map.delete('b');
print(iter, ['d', 3]);
print(iter, undefined);
