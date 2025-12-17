var xs = [
  
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
];

function testAdd() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = xs[xs.length - 1 - j];

    print(x + 0n, x);
    print(x + y, 0n);
  }
}
testAdd();

function testSub() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = xs[xs.length - 1 - j];

    print(x - 0n, x);
    print(x - (-y), 0n);
  }
}
testSub();

function testMul() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x * 0n, 0n);
    print(x * 1n, x);
    print(x * (-1n), -x);
  }
}
testMul();

function testDiv() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];

    
    if (j === xs.length >> 1) {
      print(x / 1n, 0n);
      continue;
    }

    print(x / x, 1n);
    print(x / 1n, x);
  }
}
testDiv();

function testMod() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];

    
    if (j === xs.length >> 1) {
      print(x / 1n, 0n);
      continue;
    }

    print(x % x, 0n);
    print(x % 1n, 0n);
  }
}
testMod();

function testPow() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x ** 0n, 1n);
    print(x ** 1n, x);
  }
}
testPow();

function testBitAnd() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x & x, x);
    print(x & 0n, 0n);
  }
}
testBitAnd();

function testBitOr() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x | x, x);
    print(x | 0n, x);
  }
}
testBitOr();

function testBitXor() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x ^ x, 0n);
    print(x ^ 0n, x);
  }
}
testBitXor();

function testLeftShift() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x << 0n, x);
    print(x << 1n, x * 2n);
    if (x >= 0n || !(x & 1n)) {
      print(x << -1n, x / 2n);
    } else {
      print(x << -1n, (x / 2n) - 1n);
    }
  }
}
testLeftShift();

function testRightShift() {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x >> 0n, x);
    if (x >= 0n || !(x & 1n)) {
      print(x >> 1n, x / 2n);
    } else {
      print(x >> 1n, (x / 2n) - 1n);
    }
    print(x >> -1n, x * 2n);
  }
}
testRightShift();
