function f() {
    function g() {
        for (var i = 0; i < 3; i++)
        x = i;
    };
    var [x] = [];
    g();
    print(x, 2);
    print(x);
}
f();
