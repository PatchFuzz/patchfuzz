function f(x,y,z) {
    var z;
    if (x) {
        if (y) {
            z = 0xfffffff;
        } else {
            z = 0xfffffff;
        }
        print(z, false);
    } else {
        z = Math.fround(z);
        print(z, true);
    }
    print(z, false);
    return z;
}

function g(x,y,z) {
    var z;
    if (x) {
        if (y) {
            z = 3;
        } else {
            z = 6;
        }
        print(z, false);
    } else {
        z = Math.fround(z);
        print(z, true);
    }
    print(z, true);
    return z;
}

setJitCompilerOption("ion.warmup.trigger", 50);

for (var n = 100; n--; ) {
    print(f(0,1,2), 2);
    print(f(0,0,2), 2);
    print(f(1,0,2), 0xfffffff);
    print(f(1,1,2), 0xfffffff);

    print(g(0,1,2), 2);
    print(g(0,0,2), 2);
    print(g(1,0,2), 6);
    print(g(1,1,2), 3);
}
