function testSharedArrayBuffer() {
    function test() {
        var N = 200;
        var sab = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT, {maxByteLength: (5 + N) * Int32Array.BYTES_PER_ELEMENT});
        for (var i = 0; i < N; ++i) {
            var ta = new Int32Array(sab);
            print(ta.length, 4 + i);

            
            sab.grow((5 + i) * Int32Array.BYTES_PER_ELEMENT);
            print(ta.length, 5 + i);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testSharedArrayBuffer();

function testSharedArrayBufferAndByteOffset() {
    function test() {
        var N = 200;
        var sab = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT, {maxByteLength: (5 + N) * Int32Array.BYTES_PER_ELEMENT});
        for (var i = 0; i < N; ++i) {
            var ta = new Int32Array(sab, Int32Array.BYTES_PER_ELEMENT);
            print(ta.length, 3 + i);

            
            sab.grow((5 + i) * Int32Array.BYTES_PER_ELEMENT);
            print(ta.length, 4 + i);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testSharedArrayBufferAndByteOffset();

function testSharedArrayBufferAndByteOffsetAndLength() {
    function test() {
        var N = 200;
        var sab = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT, {maxByteLength: (5 + N) * Int32Array.BYTES_PER_ELEMENT});
        for (var i = 0; i < N; ++i) {
            var ta = new Int32Array(sab, Int32Array.BYTES_PER_ELEMENT, 2);
            print(ta.length, 2);

            
            sab.grow((5 + i) * Int32Array.BYTES_PER_ELEMENT);
            print(ta.length, 2);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testSharedArrayBufferAndByteOffsetAndLength();

function testWrappedSharedArrayBuffer() {
    var g = newGlobal();

    function test() {
        var N = 200;
        var sab = new g.SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT, {maxByteLength: (5 + N) * Int32Array.BYTES_PER_ELEMENT});
        for (var i = 0; i < N; ++i) {
            var ta = new Int32Array(sab);
            print(ta.length, 4 + i);

            
            sab.grow((5 + i) * Int32Array.BYTES_PER_ELEMENT);
            print(ta.length, 5 + i);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testWrappedSharedArrayBuffer();
