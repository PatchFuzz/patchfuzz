











function add(a, b) {
    return a + b;
}


function test() {
    function MyIter() {
        return [3, 4][Symbol.iterator]();
    }
    function fn(...rest) {
        rest[Symbol.iterator] = MyIter;
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 7);
    }
}
test();
