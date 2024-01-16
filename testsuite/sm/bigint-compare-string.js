



var xs = [
  
  -(2n ** 2000n) - 1n,

  
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

  
  (2n ** 2000n) + 1n,
];

function idx(i) {
  return (i % (xs.length - 2)) + 1;
}

var ys = xs.map(x => String(x));

function testLooseEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = idx(i);
    var x = xs[j];
    var y = ys[j];
    var u = ys[j - 1];
    var v = ys[j + 1];

    assertEq(x == y, true);
    assertEq(y == x, true);

    assertEq(x == u, false);
    assertEq(u == x, false);

    assertEq(x == v, false);
    assertEq(v == x, false);
  }
}
testLooseEqual();

function testLooseNotEqual() {
  for (var i = 0; i < 100; ++i) {
    var j = idx(i);
    var x = xs[j];
    var y = ys[j];
    var u = ys[j - 1];
    var v = ys[j + 1];

    assertEq(x != y, false);
    assertEq(y != x, false);

    assertEq(x != u, true);
    assertEq(u != x, true);

    assertEq(x != v, true);
    assertEq(v != x, true);
  }
}
testLooseNotEqual();

function testLessThan() {
  for (var i = 0; i < 100; ++i) {
    var j = idx(i);
    var x = xs[j];
    var y = ys[j];
    var u = ys[j - 1];
    var v = ys[j + 1];

    assertEq(x < y, false);
    assertEq(y < x, false);

    assertEq(x < u, false);
    assertEq(u < x, true);

    assertEq(x < v, true);
    assertEq(v < x, false);
  }
}
testLessThan();

function testLessThanEquals() {
  for (var i = 0; i < 100; ++i) {
    var j = idx(i);
    var x = xs[j];
    var y = ys[j];
    var u = ys[j - 1];
    var v = ys[j + 1];

    assertEq(x <= y, true);
    assertEq(y <= x, true);

    assertEq(x <= u, false);
    assertEq(u <= x, true);

    assertEq(x <= v, true);
    assertEq(v <= x, false);
  }
}
testLessThanEquals();

function testGreaterThan() {
  for (var i = 0; i < 100; ++i) {
    var j = idx(i);
    var x = xs[j];
    var y = ys[j];
    var u = ys[j - 1];
    var v = ys[j + 1];

    assertEq(x > y, false);
    assertEq(y > x, false);

    assertEq(x > u, true);
    assertEq(u > x, false);

    assertEq(x > v, false);
    assertEq(v > x, true);
  }
}
testGreaterThan();

function testGreaterThanEquals() {
  for (var i = 0; i < 100; ++i) {
    var j = idx(i);
    var x = xs[j];
    var y = ys[j];
    var u = ys[j - 1];
    var v = ys[j + 1];

    assertEq(x >= y, true);
    assertEq(y >= x, true);

    assertEq(x >= u, true);
    assertEq(u >= x, false);

    assertEq(x >= v, false);
    assertEq(v >= x, true);
  }
}
testGreaterThanEquals();
