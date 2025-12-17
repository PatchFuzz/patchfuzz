const gb = 1 * 1024 * 1024 * 1024;
const ab = new ArrayBuffer(7 * gb);


function test(u8arr) {
    var length = u8arr.length;
    u8arr[0] = 87;

    function testExpectedOOB() {
        var base = length - 10;
        u8arr[base]++;
        for (var i = 0; i < 15; i++) {
            var val = u8arr[base + i];
            u8arr[base + i + 1] = (val|0) + 1;
        }
    }
    for (var i = 0; i < 500; i++) {
        testExpectedOOB();
    }
    print(u8arr[length - 1], 253);

    function testNegativeInt32Index() {
        var val = 0;
        for (var i = 0; i < 1500; i++) {
            var idx = (i < 1450) - 1; 
            val = u8arr[idx];
        }
        print(val, undefined);
    }
    testNegativeInt32Index();

    function testNegativeDoubleIndex() {
        var val = 0;
        for (var i = 0; i < 1500; i++) {
            var idx = numberToDouble(+(i < 1450)) - 1; 
            val = u8arr[idx];
            print(val, i < 1450 ? 87 : undefined);
        }
    }
    testNegativeDoubleIndex();

    function testConstantDoubleIndex() {
        for (var i = 0; i < 1500; i++) {
            var idxInBounds = 4294967100;
            print(u8arr[idxInBounds], 0);
            u8arr[idxInBounds] = 1;
            print(u8arr[idxInBounds], 1);
            u8arr[idxInBounds] = 0;
            var idxOOB = 7516192768;
            print(u8arr[idxOOB], undefined);
            var idxFractional = 7516192766 - 0.1;
            print(u8arr[idxFractional], undefined);
            var idxNeg0 = -0;
            print(u8arr[idxNeg0], 87);
            var idxNaN = NaN;
            print(u8arr[idxNaN], undefined);
        }
    }
    testConstantDoubleIndex();

    function testDoubleIndexWeird() {
        var arr = [0.0, -0, 3.14, NaN, Infinity, -Infinity,
                Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        for (var i = 0; i < 1500; i++) {
            var which = i % arr.length;
            var idx = arr[which];
            print(u8arr[idx], which < 2 ? 87 : undefined);
        }
    }
    testDoubleIndexWeird();

    
    function testHasElement1() {
        for (var i = 0; i < 1500; i++) {
            var idx = (length - 500) + i;
            print(idx in u8arr, idx < length);
            print(-1 in u8arr, false);
            print(10737418240 in u8arr, false);
            print(0x7fff_ffff in u8arr, true);
            print(0xffff_ffff in u8arr, true);
        }
    }
    testHasElement1();

    
    function testHasElement2() {
        for (var i = 0; i < 1500; i++) {
            var idx = (length - 500) + i;
            if (idx in u8arr) {
                print(idx < length, true);
            } else {
                print(idx >= length, true);
            }
            var count = 0;
            if (-1 in u8arr) {
                count++;
            }
            if (10737418240 in u8arr) {
                count++;
            }
            if (0x7fff_ffff in u8arr) {
            } else {
                count++;
            }
            if (0xffff_ffff in u8arr) {
            } else {
                count++;
            }
            print(count, 0);
        }
    }
    testHasElement2();
}
test(new Uint8Array(ab)); 
test(new Uint8Array(ab, 0, 4 * gb)); 
