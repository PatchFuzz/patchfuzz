











function add(a, b, c = 0, d = 0) {
    return a + b + c + d;
}


function test() {
    function fn(...rest) {
        rest[3] = 4;
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 7);
    }
}
test();
