











function add(a, b) {
    return a + b;
}


function test() {
    function maybeInvalidate() {
        
        
        
        with ({});

        if (i === 1900) {
            var ArrayIteratorPrototype = Object.getPrototypeOf(Array.prototype[Symbol.iterator]());
            Object.setPrototypeOf(ArrayIteratorPrototype, null);
        }
    }
    function fn(...rest) {
        maybeInvalidate();
        return add(...rest);
    }
    for (var i = 0; i < 4000; ++i) {
        assertEq(fn(1, 2), 3);
    }
}
test();
