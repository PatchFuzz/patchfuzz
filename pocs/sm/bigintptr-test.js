const i64 = new BigInt64Array([
  0n,
  -0x8000_0000n,

  0n,
  -0x7fff_ffffn,

  0n,
  -2n,

  0n,
  2n,

  0n,
  0x7fff_ffffn,
]);

function testIPtr() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    if (v) {
      print((i & 1), 1);
    } else {
      print((i & 1), 0);
    }
  }
}
testIPtr();
