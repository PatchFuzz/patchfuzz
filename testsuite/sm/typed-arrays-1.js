function testInt8() {
    var arr1 = new Int8Array(50);
    var arr2 = new Uint8Array(50);
    var arr3 = new Uint8ClampedArray(50);

    for (var i=0; i<arr1.length; i++) {
        arr1[i] = arr2[i] = arr3[i] = i * 8;
    }
    var res = 0;
    for (var i=0; i<arr1.length; i++) {
        res += arr1[i] + arr2[i] + arr3[i] + arr2[10];
    }
    assertEq(res, 18334);
}
testInt8();

function testInt16() {
    var arr1 = new Int16Array(70);
    var arr2 = new Uint16Array(70);

    for (var i=0; i<arr1.length; i++) {
        arr1[i] = arr2[i] = i * 1000;
    }
    var res = 0;
    for (var i=0; i<arr1.length; i++) {
        res += arr1[i] + arr2[i] + arr2[1] + arr1[3];
    }
    assertEq(res, 2423024);
}
testInt16();

function testInt32() {
    var arr = new Int32Array(60);
    arr[0] = -50;
    for (var i=1; i<arr.length; i++) {
        arr[i] = arr[i-1] + arr[0];
        ++arr[0];
    }
    assertEq(arr[arr.length-1], -1289);
}
testInt32();

function testUint32() {
    function sum(arr) {
        var res = 0;
        for (var i=0; i<arr.length; i++) {
            res += arr[i];
        }
        return res;
    }
    var arr = new Uint32Array(100);
    for (var i=0; i<arr.length; i++) {
        arr[i] = i;
    }

    
    assertEq(sum(arr), 4950);

    
    
    arr[50] = 0xffffeeee;
    assertEq(sum(arr), 4294967826);
}
testUint32();

function testFloat() {
    var arr1 = new Float32Array(75);
    var arr2 = new Float64Array(75);
    arr1[0] = arr2[0] = Math.PI * 1234567.8;

    for (var i=1; i<75; i++) {
        arr1[i] = arr1[i-1] + arr1[0];
        arr2[i] = arr2[i-1] + arr2[0];
    }
    assertEq(arr1[74] > 290888255, true);
    assertEq(arr1[74] < 290888257, true);

    assertEq(arr2[74] > 290888184, true);
    assertEq(arr2[74] < 290888185, true);
}
testFloat();

function testCanonicalNaN() {
    
    
    var buf = new ArrayBuffer(16);
    var uint32 = new Uint32Array(buf);
    var f64 = new Float64Array(buf);
    var f32 = new Float32Array(buf);

    
    uint32[0] = 0xffffff87;
    uint32[1] = 0xffffff87;

    
    for (var i=0; i<100; i++) {
        assertEq(isNaN(f64[0]), true);
        assertEq(isNaN(f32[0]), true);
    }
}
testCanonicalNaN();
