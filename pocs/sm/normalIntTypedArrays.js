function testInt32Array(L) {
    var f = new Int32Array(8);
    print(f[0], 0);
    print(f[L], 0);
    print(f[L+8], undefined);
    print(f[8], undefined);
    f[0] = 12;
    f[L+1] = 13;
    f[2] = f[1];
    f[L+3] = 4294967295;
    f[L+4] = true;
    f[L+5] = L;
    print(f[0], 12);
    print(f[1], 13);
    print(f[2], 13);
    print(f[3], -1);
    print(f[4], 1);
    print(f[5], 0);
}

function testUint32Array(L) {
    var f = new Uint32Array(8);
    print(f[0], 0);
    print(f[L], 0);
    print(f[L+8], undefined);
    print(f[8], undefined);
    f[0] = 12;
    f[L+1] = 13;
    f[2] = f[1];
    f[L+3] = 4294967295;
    f[L+4] = true;
    f[L+5] = L;
    print(f[0], 12);
    print(f[1], 13);
    print(f[2], 13);
    print(f[3], 4294967295);
    print(f[4], 1);
    print(f[5], 0);
}

for (var i = 0; i < 10; i++) {
    
    testUint32Array(0);
    if (i == 5)
        gc();
}

