











function add(a, b) {
    return a + b;
}


function test() {
    var ArrayIteratorPrototype = Object.getPrototypeOf(Array.prototype[Symbol.iterator]());
    var ArrayIteratorPrototypeNext = ArrayIteratorPrototype.next;
    ArrayIteratorPrototype.next = function() {
        var res = ArrayIteratorPrototypeNext.call(this);
        if (!res.done) {
            res.value += 2;
        }
        return res;
    };
    function fn(...rest) {
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 7);
    }
}
test();
