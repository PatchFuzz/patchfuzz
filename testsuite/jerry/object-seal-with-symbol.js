

var s1 = Symbol();
var s2 = Symbol();
var obj = {};

obj[s1] = 1;
Object.seal(obj);

obj[s1] = 2;
obj[s2] = 3

assert(obj[s1] === 2);
assert(obj[s2] === undefined);
assert(delete obj[s1] === false);
