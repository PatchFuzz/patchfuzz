Object.prototype.blah = 42;

function g(a,b,c) {
    print(a, 1);
    print(b, 2);
    print(c, 3);
    return 43;
}

function f() {
    var a = arguments;
    var b = a;
    var s = "blah";
    print(a[s], 42);
    print(b[s], 42);
    print(a[s], 42);
    print(b.length, 3);
    print(a.length, 3);
    print(g.apply(null, b), 43);
}

for (var i = 0; i < 10; ++i)
    f(1,2,3);
