var f = function (x) {
    return Math.tan(Math.fround(Math.log(Math.fround(Math.exp(x)))));
}
print(f(1), f(1));
