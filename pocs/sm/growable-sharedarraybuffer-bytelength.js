function testGrowableSharedArrayBuffer() {
  for (let i = 0; i < 4; ++i) {
    let sab = new SharedArrayBuffer(i, {maxByteLength: i + 100});
    for (let j = 0; j < 100; ++j) {
      print(sab.byteLength, i + j);

      sab.grow(i + j + 1);
      print(sab.byteLength, i + j + 1);
    }
  }
}
for (let i = 0; i < 2; ++i) testGrowableSharedArrayBuffer();
