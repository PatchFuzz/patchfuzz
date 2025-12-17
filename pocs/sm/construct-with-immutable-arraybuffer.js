function testArrayBuffer() {
    function test() {
        var ab = new ArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT).transferToImmutable();
        print(ab.immutable, true);
        for (var i = 0; i < 200; ++i) {
            var ta = new Int32Array(ab);
            print(ta.length, 4);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testArrayBuffer();

function testArrayBufferAndByteOffset() {
    function test() {
        var ab = new ArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT).transferToImmutable();
        print(ab.immutable, true);
        for (var i = 0; i < 200; ++i) {
            var ta = new Int32Array(ab, Int32Array.BYTES_PER_ELEMENT);
            print(ta.length, 3);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testArrayBufferAndByteOffset();

function testArrayBufferAndByteOffsetAndLength() {
    function test() {
        var ab = new ArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT).transferToImmutable();
        print(ab.immutable, true);
        for (var i = 0; i < 200; ++i) {
            var ta = new Int32Array(ab, Int32Array.BYTES_PER_ELEMENT, 2);
            print(ta.length, 2);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testArrayBufferAndByteOffsetAndLength();

function testWrappedArrayBuffer() {
    var g = newGlobal();

    function test() {
        var ab = new g.ArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT).transferToImmutable();
        print(ab.immutable, true);
        for (var i = 0; i < 200; ++i) {
            var ta = new Int32Array(ab);
            print(ta.length, 4);
        }
    }
    for (var i = 0; i < 2; ++i) {
        test();
    }
}
testWrappedArrayBuffer();
