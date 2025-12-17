function f(a) {
    var x = a;
    var y = x;

    print((x << y), (a << a));
    print((y << x), (a << a));
}

f(2);

