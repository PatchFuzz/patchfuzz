function testImmutableArrayBuffer() {
  for (let i = 0; i < 4; ++i) {
    let ab = new ArrayBuffer(i).transferToImmutable();
    for (let j = 0; j < 100; ++j) {
      print(ab.byteLength, i);
    }
  }
}
for (let i = 0; i < 2; ++i) testImmutableArrayBuffer();
