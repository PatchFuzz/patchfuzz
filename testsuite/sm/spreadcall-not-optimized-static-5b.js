











function add(a, b) {
    return a + b;
}


function test() {
    var ArrayPrototypeIterator = Array.prototype[Symbol.iterator];
    Array.prototype[Symbol.iterator] = function() {
        return ArrayPrototypeIterator.call([3, 4]);
    };
    function fn(...rest) {
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 7);
    }
}
test();
