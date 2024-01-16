











function add(a, b) {
    return a + b;
}


function test() {
    class MyArray extends Array { }
    function fn(...rest) {
        rest = new MyArray(3, 4);
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 7);
    }
}
test();
