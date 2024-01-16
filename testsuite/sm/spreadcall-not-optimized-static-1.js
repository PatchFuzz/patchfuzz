











function add(a, b) {
    return a + b;
}


function test() {
    var badRest = {
        *[Symbol.iterator]() {
            yield 3;
            yield 4;
        }
    };
    function fn(...rest) {
        rest = badRest;
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        assertEq(fn(1, 2), 7);
    }
}
test();
