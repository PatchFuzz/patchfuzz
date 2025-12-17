function f() {
    var y = this * this;
    for (var i = 0; i < 2000; i++) {
        print(y >>> y, 0);
    }
}
f();
