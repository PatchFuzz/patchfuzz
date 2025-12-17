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

function testNeg() {
  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = xs[xs.length - 1 - j];

    print(-x, y);
  }
}
testNeg();

function testBitNot() {
  var ys = xs.map(x => -(x + 1n));

  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    print(~x, y);
  }
}
testBitNot();

function testPreInc() {
  var ys = xs.map(x => x + 1n);

  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    var r = ++x;
    print(x, y);
    print(r, y);
  }
}
testPostInc();

function testPostInc() {
  var ys = xs.map(x => x + 1n);

  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    var r = x++;
    print(x, y);
    print(r, xs[j]);
  }
}
testPostInc();

function testPreDec() {
  var ys = xs.map(x => x - 1n);

  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    var r = --x;
    print(x, y);
    print(r, y);
  }
}
testPostDec();

function testPostDec() {
  var ys = xs.map(x => x - 1n);

  for (var i = 0; i < 100; ++i) {
    var j = i % xs.length;
    var x = xs[j];
    var y = ys[j];

    var r = x--;
    print(x, y);
    print(r, xs[j]);
  }
}
testPostDec();
