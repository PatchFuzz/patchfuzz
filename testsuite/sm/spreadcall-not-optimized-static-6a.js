











function add(a, b) {
    return a + b;
}


function test() {
    var ArrayIteratorPrototype = Object.getPrototypeOf(Array.prototype[Symbol.iterator]());
    Object.setPrototypeOf(ArrayIteratorPrototype, null);
    function fn(...rest) {
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 3);
    }
}
test();
