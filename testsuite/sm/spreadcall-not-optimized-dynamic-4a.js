











function add(a, b) {
    return a + b;
}


function test() {
    class MyArray1 extends Array { }
    class MyArray2 extends Array { }
    function maybeInvalidate(rest) {
        
        
        
        with ({});

        if (i >= 1900) {
            if (i & 1)
                rest = new MyArray1(3, 4);
            else
                rest = new MyArray2(5, 6);
        }
        return rest;
    }
    function fn(...rest) {
        rest = maybeInvalidate(rest);
        return add(...rest);
    }
    for (var i = 0; i < 4000; ++i) {
        assertEq(fn(1, 2), i < 1900 ? 3 : (i & 1) ? 7 : 11);
    }
}
test();
