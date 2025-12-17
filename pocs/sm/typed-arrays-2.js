function test1() {
    var arr = new Uint32Array(100);
    Object.prototype[105] = true;
    arr[50] = 0xffffee00;
    arr[84] = 444;

    var res = 0;
    for (var i=0; i<200; i++) {
        res = arr[i];
        if (i == 50)
            print(res, 0xffffee00);
        else if (i == 84)
            print(res, 444);
        else if (i >= 100)
            print(res, undefined);
    }
}
test1();
