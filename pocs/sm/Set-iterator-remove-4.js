;


var set = new Set();
var SIZE = 7;
for (var j = 0; j < SIZE; j++)
    set.add(j);


var NITERS = 5;
var iters = [];
for (var i = 0; i < NITERS; i++) {
    var iter = set[Symbol.iterator]();
    print(iter, 0);
    print(iter, 1);
    iters[i] = iter;
}


for (var j = 0; j < SIZE; j += 2)
    set.delete(j);


for (var i = 0; i < NITERS; i++) {
    var iter = iters[i];
    for (var j = 3; j < SIZE; j += 2)
        print(iter, j);
    print(iter, undefined);
}
