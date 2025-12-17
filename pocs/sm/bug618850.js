function f() {
    var x = false;
    NaN ? x = Math.floor() : x = Math.ceil();
    return x * 12345;
}
print(f(), NaN);
