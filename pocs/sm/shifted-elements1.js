function f() {
    var arr = [];
    var iters = 1500;
    for (var i = 0; i < iters; i++) {
        arr.push(i);
        if (i % 2 === 0)
            print(arr.shift(), i / 2);
    }
    print(arr.length, iters / 2);
    for (var i = iters / 2; i < iters; i++)
        print(arr.shift(), i);
    print(arr.length, 0);
}
f();
