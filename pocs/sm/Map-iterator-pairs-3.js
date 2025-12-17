;

var map = new Map([['a', 1]]);
var res = map[Symbol.iterator]().next();
print(res, ['a', 1], false);
res.value[0] = 'b';
res.value[1] = 2;
print(res, ['b', 2], false);
print(map.get('a'), 1);
print(map.has('b'), false);
print(map.size, 1);
