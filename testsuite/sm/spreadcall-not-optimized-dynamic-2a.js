











function add(a, b, c = 0, d = 0) {
    return a + b + c + d;
}


function test() {
    function maybeInvalidate(rest) {
        
        
        
        with ({});

        if (i >= 1900) {
            rest[3] = 4;
        }
    }
    function fn(...rest) {
        maybeInvalidate(rest);
        return add(...rest);
    }
    for (var i = 0; i < 4000; ++i) {
        assertEq(fn(1, 2), i < 1900 ? 3 : 7);
    }
}
test();
