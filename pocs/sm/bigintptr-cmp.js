const i64 = new BigInt64Array([
  -0x8000_0000n,
  -0x7fff_ffffn,

  -1n,
  0n,
  1n,

  0x7fff_ffffn,
]);

function gcd(a, b) {
  a |= 0;
  b |= 0;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function print(xs, ys, n) {
  
  
  
  var m = 3;

  print(gcd(xs.length, ys.length), 1);
  print(m * xs.length * ys.length <= n, true);
}

function fillWithZeros(ta) {
  let length = ta.length;
  let zeros = 1;
  while (gcd(length, length + zeros) !== 1) {
    zeros++;
  }

  let result = new ta.constructor(length + zeros);
  result.set(ta);
  return result;
}

function testIPtr() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    
    var eq_zero = v == BigInt.asIntN(128, 0n);
    var lt_zero = v < BigInt.asIntN(128, 0n);

    var eq_one = v == BigInt.asIntN(128, 1n);
    var lt_one = v < BigInt.asIntN(128, 1n);

    var eq_neg_one = v == BigInt.asIntN(128, -1n);
    var lt_neg_one = v < BigInt.asIntN(128, -1n);

    var eq_i31 = v == BigInt.asIntN(128, 0x8000_0000n);
    var lt_i31 = v < BigInt.asIntN(128, 0x8000_0000n);

    var eq_i32 = v == BigInt.asIntN(128, 0x1_0000_0000n);
    var lt_i32 = v < BigInt.asIntN(128, 0x1_0000_0000n);

    
    print(v == 0n, eq_zero);
    print(v != 0n, !eq_zero);
    print(v < 0n, lt_zero && !eq_zero);
    print(v <= 0n, lt_zero || eq_zero);
    print(v > 0n, !lt_zero && !eq_zero);
    print(v >= 0n, !lt_zero || eq_zero);

    print(v == 1n, eq_one);
    print(v != 1n, !eq_one);
    print(v < 1n, lt_one && !eq_one);
    print(v <= 1n, lt_one || eq_one);
    print(v > 1n, !lt_one && !eq_one);
    print(v >= 1n, !lt_one || eq_one);

    print(v == -1n, eq_neg_one);
    print(v != -1n, !eq_neg_one);
    print(v < -1n, lt_neg_one && !eq_neg_one);
    print(v <= -1n, lt_neg_one || eq_neg_one);
    print(v > -1n, !lt_neg_one && !eq_neg_one);
    print(v >= -1n, !lt_neg_one || eq_neg_one);

    print(v == 0x8000_0000n, eq_i31);
    print(v != 0x8000_0000n, !eq_i31);
    print(v < 0x8000_0000n, lt_i31 && !eq_i31);
    print(v <= 0x8000_0000n, lt_i31 || eq_i31);
    print(v > 0x8000_0000n, !lt_i31 && !eq_i31);
    print(v >= 0x8000_0000n, !lt_i31 || eq_i31);

    print(v == 0x1_0000_0000n, eq_i32);
    print(v != 0x1_0000_0000n, !eq_i32);
    print(v < 0x1_0000_0000n, lt_i32 && !eq_i32);
    print(v <= 0x1_0000_0000n, lt_i32 || eq_i32);
    print(v > 0x1_0000_0000n, !lt_i32 && !eq_i32);
    print(v >= 0x1_0000_0000n, !lt_i32 || eq_i32);
  }
}
testIPtr();

function testIPtr_R() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    
    var eq_zero = v == BigInt.asIntN(128, 0n);
    var lt_zero = v < BigInt.asIntN(128, 0n);

    var eq_one = v == BigInt.asIntN(128, 1n);
    var lt_one = v < BigInt.asIntN(128, 1n);

    var eq_neg_one = v == BigInt.asIntN(128, -1n);
    var lt_neg_one = v < BigInt.asIntN(128, -1n);

    var eq_i31 = v == BigInt.asIntN(128, 0x8000_0000n);
    var lt_i31 = v < BigInt.asIntN(128, 0x8000_0000n);

    var eq_i32 = v == BigInt.asIntN(128, 0x1_0000_0000n);
    var lt_i32 = v < BigInt.asIntN(128, 0x1_0000_0000n);

    
    print(0n == v, eq_zero);
    print(0n != v, !eq_zero);
    print(0n > v, lt_zero && !eq_zero);
    print(0n >= v, lt_zero || eq_zero);
    print(0n < v, !lt_zero && !eq_zero);
    print(0n <= v, !lt_zero || eq_zero);

    print(1n == v, eq_one);
    print(1n != v, !eq_one);
    print(1n > v, lt_one && !eq_one);
    print(1n >= v, lt_one || eq_one);
    print(1n < v, !lt_one && !eq_one);
    print(1n <= v, !lt_one || eq_one);

    print(-1n == v, eq_neg_one);
    print(-1n != v, !eq_neg_one);
    print(-1n > v, lt_neg_one && !eq_neg_one);
    print(-1n >= v, lt_neg_one || eq_neg_one);
    print(-1n < v, !lt_neg_one && !eq_neg_one);
    print(-1n <= v, !lt_neg_one || eq_neg_one);

    print(0x8000_0000n == v, eq_i31);
    print(0x8000_0000n != v, !eq_i31);
    print(0x8000_0000n > v, lt_i31 && !eq_i31);
    print(0x8000_0000n >= v, lt_i31 || eq_i31);
    print(0x8000_0000n < v, !lt_i31 && !eq_i31);
    print(0x8000_0000n <= v, !lt_i31 || eq_i31);

    print(0x1_0000_0000n == v, eq_i32);
    print(0x1_0000_0000n != v, !eq_i32);
    print(0x1_0000_0000n > v, lt_i32 && !eq_i32);
    print(0x1_0000_0000n >= v, lt_i32 || eq_i32);
    print(0x1_0000_0000n < v, !lt_i32 && !eq_i32);
    print(0x1_0000_0000n <= v, !lt_i32 || eq_i32);
  }
}
testIPtr_R();

function testIPtr_I32Constant() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    
    var eq_zero = v == BigInt.asIntN(128, 0n);
    var lt_zero = v < BigInt.asIntN(128, 0n);

    var eq_one = v == BigInt.asIntN(128, 1n);
    var lt_one = v < BigInt.asIntN(128, 1n);

    var eq_neg_one = v == BigInt.asIntN(128, -1n);
    var lt_neg_one = v < BigInt.asIntN(128, -1n);

    var eq_i31 = v == BigInt.asIntN(128, 0x8000_0000n);
    var lt_i31 = v < BigInt.asIntN(128, 0x8000_0000n);

    var eq_i32 = v == BigInt.asIntN(128, 0x1_0000_0000n);
    var lt_i32 = v < BigInt.asIntN(128, 0x1_0000_0000n);

    
    print(v == 0, eq_zero);
    print(v != 0, !eq_zero);
    print(v < 0, lt_zero && !eq_zero);
    print(v <= 0, lt_zero || eq_zero);
    print(v > 0, !lt_zero && !eq_zero);
    print(v >= 0, !lt_zero || eq_zero);

    print(v == 1, eq_one);
    print(v != 1, !eq_one);
    print(v < 1, lt_one && !eq_one);
    print(v <= 1, lt_one || eq_one);
    print(v > 1, !lt_one && !eq_one);
    print(v >= 1, !lt_one || eq_one);

    print(v == -1, eq_neg_one);
    print(v != -1, !eq_neg_one);
    print(v < -1, lt_neg_one && !eq_neg_one);
    print(v <= -1, lt_neg_one || eq_neg_one);
    print(v > -1, !lt_neg_one && !eq_neg_one);
    print(v >= -1, !lt_neg_one || eq_neg_one);
  }
}
testIPtr_I32Constant();

function testIPtr_I32Constant_R() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    
    var eq_zero = v == BigInt.asIntN(128, 0n);
    var lt_zero = v < BigInt.asIntN(128, 0n);

    var eq_one = v == BigInt.asIntN(128, 1n);
    var lt_one = v < BigInt.asIntN(128, 1n);

    var eq_neg_one = v == BigInt.asIntN(128, -1n);
    var lt_neg_one = v < BigInt.asIntN(128, -1n);

    var eq_i31 = v == BigInt.asIntN(128, 0x8000_0000n);
    var lt_i31 = v < BigInt.asIntN(128, 0x8000_0000n);

    var eq_i32 = v == BigInt.asIntN(128, 0x1_0000_0000n);
    var lt_i32 = v < BigInt.asIntN(128, 0x1_0000_0000n);

    
    print(0 == v, eq_zero);
    print(0 != v, !eq_zero);
    print(0 > v, lt_zero && !eq_zero);
    print(0 >= v, lt_zero || eq_zero);
    print(0 < v, !lt_zero && !eq_zero);
    print(0 <= v, !lt_zero || eq_zero);

    print(1 == v, eq_one);
    print(1 != v, !eq_one);
    print(1 > v, lt_one && !eq_one);
    print(1 >= v, lt_one || eq_one);
    print(1 < v, !lt_one && !eq_one);
    print(1 <= v, !lt_one || eq_one);

    print(-1 == v, eq_neg_one);
    print(-1 != v, !eq_neg_one);
    print(-1 > v, lt_neg_one && !eq_neg_one);
    print(-1 >= v, lt_neg_one || eq_neg_one);
    print(-1 < v, !lt_neg_one && !eq_neg_one);
    print(-1 <= v, !lt_neg_one || eq_neg_one);
  }
}
testIPtr_I32Constant_R();

function testIPtr_TooLargeConstant() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    
    print(v == 0x8000_0000_0000_0000n, false);
    print(v != 0x8000_0000_0000_0000n, true);
    print(v < 0x8000_0000_0000_0000n, true);
    print(v <= 0x8000_0000_0000_0000n, true);
    print(v > 0x8000_0000_0000_0000n, false);
    print(v >= 0x8000_0000_0000_0000n, false);

    print(v == -0x8000_0000_0000_0001n, false);
    print(v != -0x8000_0000_0000_0001n, true);
    print(v < -0x8000_0000_0000_0001n, false);
    print(v <= -0x8000_0000_0000_0001n, false);
    print(v > -0x8000_0000_0000_0001n, true);
    print(v >= -0x8000_0000_0000_0001n, true);

    print(v == 0x1_0000_0000_0000_0000n, false);
    print(v != 0x1_0000_0000_0000_0000n, true);
    print(v < 0x1_0000_0000_0000_0000n, true);
    print(v <= 0x1_0000_0000_0000_0000n, true);
    print(v > 0x1_0000_0000_0000_0000n, false);
    print(v >= 0x1_0000_0000_0000_0000n, false);
  }
}
testIPtr_TooLargeConstant();

function testIPtr_TooLargeConstant_R() {
  for (var i = 0; i < 200; ++i) {
    var v = i64[i % i64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;

    
    print(0x8000_0000_0000_0000n == v, false);
    print(0x8000_0000_0000_0000n != v, true);
    print(0x8000_0000_0000_0000n > v, true);
    print(0x8000_0000_0000_0000n >= v, true);
    print(0x8000_0000_0000_0000n < v, false);
    print(0x8000_0000_0000_0000n <= v, false);

    print(-0x8000_0000_0000_0001n == v, false);
    print(-0x8000_0000_0000_0001n != v, true);
    print(-0x8000_0000_0000_0001n > v, false);
    print(-0x8000_0000_0000_0001n >= v, false);
    print(-0x8000_0000_0000_0001n < v, true);
    print(-0x8000_0000_0000_0001n <= v, true);

    print(0x1_0000_0000_0000_0000n == v, false);
    print(0x1_0000_0000_0000_0000n != v, true);
    print(0x1_0000_0000_0000_0000n > v, true);
    print(0x1_0000_0000_0000_0000n >= v, true);
    print(0x1_0000_0000_0000_0000n < v, false);
    print(0x1_0000_0000_0000_0000n <= v, false);
  }
}
testIPtr_TooLargeConstant_R();


function testIIPtr() {
  var r64 = fillWithZeros(i64);
  print(i64, r64, 500);

  for (var i = 0; i < 500; ++i) {
    var v = i64[i % i64.length];
    var w = r64[i % r64.length];

    
    var x = v < 0 ? 1n : v > 0 ? -1n : 0n;
    v += x;
    w += x;

    
    var eq = v == BigInt.asIntN(128, w);
    var lt = v < BigInt.asIntN(128, w);

    print(v == w, eq);
    print(v != w, !eq);
    print(v < w, lt && !eq);
    print(v <= w, lt || eq);
    print(v > w, !lt && !eq);
    print(v >= w, !lt || eq);
  }
}
testIIPtr();
