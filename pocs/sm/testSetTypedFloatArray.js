function testSetTypedFloat32Array(k) {
    var ar = new Float32Array(8);
    ar[k+5] = { };
    ar[k+6] = ar;
    ar[k+4] = (k + 800) * 897 * 800 * 800 * 810 * 1923437;
    var t = k + 555;
    var L = ar[k+7] = t & 5;
    ar[0] = 12.3;
    ar[8] = 500;
    ar[k+8] = 1200;
    ar[k+1] = 500;
    ar[k+2] = "3" + k;
    ar[k+3] = true;
    print(ar[0] - 12.3 >= 0 &&
             ar[0] - 12.3 <= 0.0001, true);
    print(ar[1], 500);
    print(ar[2], 30);
    print(ar[3], 1);
    print(ar[4], 715525927453369300000);
    print(ar[5], NaN);
    print(ar[6], NaN);
    print(ar[7], 1);
    print(ar[8], undefined);
    print(ar[k+8], undefined);
}

function testSetTypedFloat64Array(k) {
    var ar = new Float64Array(8);
    ar[k+5] = { };
    ar[k+6] = ar;
    ar[k+4] = (k + 800) * 897 * 800 * 800 * 810 * 1923437;
    var t = k + 555;
    var L = ar[k+7] = t & 5;
    ar[0] = 12.3;
    ar[8] = 500;
    ar[k+8] = 1200;
    ar[k+1] = 500;
    ar[k+2] = "3" + k;
    ar[k+3] = true;
    print(ar[0] - 12.3 >= 0 &&
             ar[0] - 12.3 <= 0.0001, true);
    print(ar[1], 500);
    print(ar[2], 30);
    print(ar[3], 1);
    print(ar[4], 715525949998080000000);
    print(ar[5], NaN);
    print(ar[6], NaN);
    print(ar[7], 1);
    print(ar[8], undefined);
    print(ar[k+8], undefined);
}

for (var i = 0; i <= 10; i++) {
    testSetTypedFloat32Array(0);
    testSetTypedFloat64Array(0);
    if (i == 5)
        gc();
}

