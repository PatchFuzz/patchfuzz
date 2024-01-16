











function add(a, b) {
    return a + b;
}


function test() {
    class MyArray1 extends Array { }
    class MyArray2 extends Array { }
    function fn(...rest) {
        if (i & 1)
            rest = new MyArray1(3, 4);
        else
            rest = new MyArray2(5, 6);
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), (i & 1) ? 7 : 11);
    }
}
test();
