











function add(a, b) {
    return a + b;
}


function test() {
    function maybeInvalidate() {
        
        
        
        with ({});

        if (i === 1900) {
            var ArrayIteratorPrototype = Object.getPrototypeOf(Array.prototype[Symbol.iterator]());
            var ArrayIteratorPrototypeNext = ArrayIteratorPrototype.next;
            ArrayIteratorPrototype.next = function() {
                var res = ArrayIteratorPrototypeNext.call(this);
                if (!res.done) {
                    res.value += 2;
                }
                return res;
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
