function fillConstantInt64() {
  var i64 = new BigInt64Array(1);
  for (var i = 0; i < 100; ++i) {
    i64.fill(0n);
    print(i64[0], 0n);

    i64.fill(1n);
    print(i64[0], 1n);

    i64.fill(-1n);
    print(i64[0], -1n);

    
    i64.fill(0x7fff_ffff_ffff_ffffn);
    print(i64[0], 0x7fff_ffff_ffff_ffffn);

    
    i64.fill(0xffff_ffff_ffff_ffffn);
    print(i64[0], -1n);

    
    i64.fill(-0x8000_0000_0000_0000n);
    print(i64[0], -0x8000_0000_0000_0000n);

    
    i64.fill(0x1111_2222_3333_4444_5555_6666n);
    print(i64[0], 0x3333_4444_5555_6666n);

    
    i64.fill(-0x1111_2222_3333_4444_5555_6666n);
    print(i64[0], -0x3333_4444_5555_6666n);
  }
}
fillConstantInt64();


function fillConstantUint64() {
  var u64 = new BigUint64Array(1);
  for (var i = 0; i < 100; ++i) {
    u64.fill(0n);
    print(u64[0], 0n);

    u64.fill(1n);
    print(u64[0], 1n);

    u64.fill(-1n);
    print(u64[0], 0xffff_ffff_ffff_ffffn);

    
    u64.fill(0x7fff_ffff_ffff_ffffn);
    print(u64[0], 0x7fff_ffff_ffff_ffffn);

    
    u64.fill(0xffff_ffff_ffff_ffffn);
    print(u64[0], 0xffff_ffff_ffff_ffffn);

    
    u64.fill(-0x8000_0000_0000_0000n);
    print(u64[0], 0x8000_0000_0000_0000n);

    
    u64.fill(0x1111_2222_3333_4444_5555_6666n);
    print(u64[0], 0x3333_4444_5555_6666n);

    
    u64.fill(-0x1111_2222_3333_4444_5555_6666n);
    print(u64[0], 0xcccc_bbbb_aaaa_999an);
  }
}
fillConstantUint64();


function fillInt64FromInt32() {
  var i64 = new BigInt64Array(1);
  for (var i = 0; i < 100; ++i) {
    i64.fill(BigInt(i));
    print(i64[0], BigInt(i));

    i64.fill(BigInt(-i));
    print(i64[0], BigInt(-i));
  }
}
fillInt64FromInt32();


function fillUint64FromInt32() {
  var u64 = new BigUint64Array(1);
  for (var i = 0; i < 100; ++i) {
    u64.fill(BigInt(i));
    print(u64[0], BigInt(i));

    u64.fill(BigInt(-i));
    print(u64[0], BigInt.asUintN(64, BigInt(-i)));
  }
}
fillUint64FromInt32();


function fillInt64FromInt64() {
  var i64 = new BigInt64Array(2);
  for (var i = 0; i < 100; ++i) {
    i64[0] = BigInt(i);
    i64.fill(i64[0], 1);
    print(i64[1], BigInt(i));
  }
}
fillInt64FromInt64();


function fillUint64FromUint64() {
  var u64 = new BigUint64Array(2);
  for (var i = 0; i < 100; ++i) {
    u64[0] = BigInt(i);
    u64.fill(u64[0], 1);
    print(u64[1], BigInt(i));
  }
}
fillUint64FromUint64();
