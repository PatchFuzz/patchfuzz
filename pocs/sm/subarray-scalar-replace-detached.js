function test() {
  for (var i = 0; i < 100; ++i) {
    var ab = new ArrayBuffer(10 * Int32Array.BYTES_PER_ELEMENT);
    var ta = new Int32Array(ab, 4);
    var sub = ta.subarray(2);

    print(sub.length, 7);
    print(sub.byteLength, 7 * Int32Array.BYTES_PER_ELEMENT);
    print(sub.byteOffset, 4 + 2 * Int32Array.BYTES_PER_ELEMENT);

    
    detachArrayBuffer(ta.buffer);

    
    print(sub.length, 0);
    print(sub.byteLength, 0);
    print(sub.byteOffset, 0);

    print(sub, true);
  }
}
test();
