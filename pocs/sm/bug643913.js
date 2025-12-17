function f() {
    var x;
    eval("x = 3.14");
    x = 123;
    var y = -(-x);
    print(y, 123);
}
f();
