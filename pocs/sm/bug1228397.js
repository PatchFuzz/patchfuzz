(function() {
    f = (function(y) {
        return y ? (2147483648 >>> 0) / 1 == -2147483648 : 2147483648;
    })
    print(f(0), 2147483648);
    print(f(1), false);
})()
