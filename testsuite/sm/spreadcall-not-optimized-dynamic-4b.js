











function add(a, b) {
    return a + b;
}


function test() {
    class MyArray extends Array { }
    function maybeInvalidate(rest) {
        
        
        
        with ({});

        if (i >= 1900) {
            rest = new MyArray(3, 4);
        }
        return rest;
    }
    function fn(...rest) {
        rest = maybeInvalidate(rest);
        return add(...rest);
    }
    for (var i = 0; i < 4000; ++i) {
        assertEq(fn(1, 2), i < 1900 ? 3 : 7);
    }
}
test();
