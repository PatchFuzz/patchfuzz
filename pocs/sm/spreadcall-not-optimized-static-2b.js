function add(a, b, c = 0, d = 0) {
    return a + b + c + d;
}


function test() {
    function fn(...rest) {
        rest.length = 3;
        return add(...rest);
    }
    for (var i = 0; i < 2000; ++i) {
        print(fn(1, 2), 3);
    }
}
test();
