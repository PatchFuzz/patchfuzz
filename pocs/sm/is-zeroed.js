function f() {
    var x = new SharedArrayBuffer(4096);
    var y = new Int32Array(x);
    print(y[0], 0);
    print(y[1], 0);
    print(y[1023], 0);
}

f();
