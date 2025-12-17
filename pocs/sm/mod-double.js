function test1() {
    function mod(x, y) {
        return x % y;
    }
    for (var i=0; i<60; i++) {
        print(mod(4, 2), 0);
        print(mod(5.5, 2.5), 0.5);
        print(mod(10.3, 0), NaN);
        print(mod(-0, -3), -0);

    }
}
test1();
