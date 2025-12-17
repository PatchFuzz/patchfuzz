const bigIntValues = [
  
  -(2n ** 2000n),
  -(2n ** 1000n),

  
  -18446744073709551617n,
  -18446744073709551616n,
  -18446744073709551615n,

  
  -9223372036854775809n,
  -9223372036854775808n,
  -9223372036854775807n,

  
  -4294967297n,
  -4294967296n,
  -4294967295n,

  
  -2147483649n,
  -2147483648n,
  -2147483647n,

  -1n,
  0n,
  1n,

  
  2147483647n,
  2147483648n,
  2147483649n,

  
  4294967295n,
  4294967296n,
  4294967297n,

  
  9223372036854775807n,
  9223372036854775808n,
  9223372036854775809n,

  
  18446744073709551615n,
  18446744073709551616n,
  18446744073709551617n,

  
  2n ** 1000n,
  2n ** 2000n,
];

function testExchange() {
  const int64 = new BigInt64Array(2);
  const uint64 = new BigUint64Array(2);

  
  for (let i = 0; i < 20; ++i) {
    for (let j = 0; j < bigIntValues.length; ++j) {
      let value = bigIntValues[j];

      print(Atomics.exchange(int64, 0, value), 0n);
      print(int64[0], BigInt.asIntN(64, value));

      print(Atomics.exchange(uint64, 0, value), 0n);
      print(uint64[0], BigInt.asUintN(64, value));

      print(Atomics.exchange(int64, 0, 0n), BigInt.asIntN(64, value));
      print(int64[0], 0n);

      print(Atomics.exchange(uint64, 0, 0n), BigInt.asUintN(64, value));
      print(uint64[0], 0n);
    }
  }

  
  for (let i = 0; i < 20; ++i) {
    for (let j = 0; j < bigIntValues.length; ++j) {
      let value = bigIntValues[j];
      let idx = j & 1;

      print(Atomics.exchange(int64, idx, value), 0n);
      print(int64[idx], BigInt.asIntN(64, value));

      print(Atomics.exchange(uint64, idx, value), 0n);
      print(uint64[idx], BigInt.asUintN(64, value));

      print(Atomics.exchange(int64, idx, 0n), BigInt.asIntN(64, value));
      print(int64[idx], 0n);

      print(Atomics.exchange(uint64, idx, 0n), BigInt.asUintN(64, value));
      print(uint64[idx], 0n);
    }
  }
}
for (let i = 0; i < 2; ++i) testExchange();
