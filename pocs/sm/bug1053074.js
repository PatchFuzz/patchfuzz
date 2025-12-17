function f(y) {
        return 2147483648 < y >>> 0
}
print(f(0), false);
print(f(-8), true);

function g(y) {
    var t = Math.floor(y);
    return 2147483648 < t+2;
}
print(g(0), false)
print(g(2147483647), true)
