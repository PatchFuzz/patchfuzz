











function add(a, b) {
    return a + b;
}


function test() {
    function MyIter() {
        return [3, 4][Symbol.iterator]();
    }
    function maybeInvalidate(rest) {
        
        
        
        with ({});

        if (i >= 1900) {
            rest[Symbol.iterator] = MyIter;
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
