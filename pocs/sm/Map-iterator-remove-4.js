;


var map = new Map();
var SIZE = 7;
for (var j = 0; j < SIZE; j++)
    map.set(j, j);


var NITERS = 5;
var iters = [];
for (var i = 0; i < NITERS; i++) {
    var iter = map[Symbol.iterator]();
    print(iter, [0, 0]);
    print(iter, [1, 1]);
    iters[i] = iter;
}


for (var j = 0; j < SIZE; j += 2)
    map.delete(j);


for (var i = 0; i < NITERS; i++) {
    var iter = iters[i];
    for (var j = 3; j < SIZE; j += 2)
        print(iter, [j, j]);
    print(iter, undefined);
}
