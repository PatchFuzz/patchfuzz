














var map = new Map();
var array = [1.5];
map.set(array);
assert(map.has(array));


map = new Map();
array = [0];
map.set(array);
assert(map.has(array));
