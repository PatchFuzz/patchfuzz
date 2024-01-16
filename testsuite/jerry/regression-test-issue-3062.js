













var map = new Map();
var obj = Object.freeze({});
map.set(obj, 1);
assert(map.has(obj));
