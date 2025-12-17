function f() {
    function g() {
        var b = x;
        var c = b++ & b;
        return c;
    }
    var x = x--;
    return g();
}
print(f(), 0);
