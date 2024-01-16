











function add(a, b) {
    return a + b;
}


function test() {
    function maybeInvalidate() {
        
        
        
        with ({});

        if (i === 1900) {
            Object.setPrototypeOf(Array.prototype, null);
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
