function test() {
  var lengths = [10, 10_000, 20_000, 50_000, 71_231, 71_232, 128_001];
  
  
  for (var i = 0; i < 20; i++) {
    for (var len of lengths) {
      var arr = new Uint8Array(len);
      if (i >= 15) {
        minorgc();
      }
      arr[len - 1] = 0xf7;
      var buf = arr.buffer;
      print(arr.byteLength, len);
      print(buf.byteLength, len);
      print(arr[len - 1], 0xf7);

      arr = new Uint16Array(len);
      if (i >= 15) {
        minorgc();
      }
      arr[len - 1] = 0x1234;
      buf = arr.buffer;
      print(arr.byteLength, len * 2);
      print(buf.byteLength, len * 2);
      print(arr[len - 1], 0x1234);

      arr = new BigInt64Array(len);
      if (i >= 15) {
        minorgc();
      }
      arr[len - 1] = 12345n;
      buf = arr.buffer;
      print(arr.byteLength, len * 8);
      print(buf.byteLength, len * 8);
      print(arr[len - 1], 12345n);
    }
  }
}
test();
