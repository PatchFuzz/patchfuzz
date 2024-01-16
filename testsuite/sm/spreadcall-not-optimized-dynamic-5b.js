











function add(a, b) {
    return a + b;
}


function test() {
    function maybeInvalidate() {
        
        
        
        with ({});

        if (i === 1900) {
            var ArrayPrototypeIterator = Array.prototype[Symbol.iterator];
            Array.prototype[Symbol.iterator] = function() {
                return ArrayPrototypeIterator.call([3, 4]);
            };
        }
    }
    function fn(...rest) {
        maybeInvalidate();
        return add(...rest);
    }
    for (var i = 0; i < 4000; ++i) {
        assertEq(fn(1, 2), i < 1900 ? 3 : 7);
    }
}
test();
