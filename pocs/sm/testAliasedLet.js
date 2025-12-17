function f() {
    {
        let x, y, z;
        eval('x = 1; y = 2; z = 3');
        for (var i = 0; i < 10000; ++i) {
            print(x, 1);
            print(y, 2);
            print(z, 3);
        }
    }
}
f();
