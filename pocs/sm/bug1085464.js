function *f() {
    var o = new Proxy({}, {
        get: function() { print(0, 1); },
        has: function() { print(0, 2); }
    });

    with (o) {
        yield 1;
        with ({}) {
            yield 2;
        }
    }
    with ({".generator": 100}) {
        yield eval("3");
    }
}
var s = "";
for (var i of f())
    s += i;
print(s, "123");
