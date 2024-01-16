


function gcd(a, b) {
  a |= 0;
  b |= 0;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

const ITERATIONS = 150;

function assertAllCombinationsTested(xs, ys, n) {
  
  
  
  var m = 3;

  assertEq(gcd(xs.length, ys.length), 1);
  assertEq(m * xs.length * ys.length <= n, true);
}

function LessThan(xs, ys, n = ITERATIONS) {
  assertAllCombinationsTested(xs, ys, n);
  for (var i = 0; i < n; ++i) {
    var x = xs[i % xs.length];
    var y = ys[i % ys.length]|0; 

    assertEq(x == y, false);
    assertEq(y == x, false);

    assertEq(x != y, true);
    assertEq(y != x, true);

    assertEq(x < y, true);
    assertEq(y < x, false);

    assertEq(x <= y, true);
    assertEq(y <= x, false);

    assertEq(x > y, false);
    assertEq(y > x, true);

    assertEq(x >= y, false);
    assertEq(y >= x, true);
  }
}

function GreaterThan(xs, ys, n = ITERATIONS) {
  assertAllCombinationsTested(xs, ys, n);
  for (var i = 0; i < n; ++i) {
    var x = xs[i % xs.length];
    var y = ys[i % ys.length]|0; 

    assertEq(x == y, false);
    assertEq(y == x, false);

    assertEq(x != y, true);
    assertEq(y != x, true);

    assertEq(x < y, false);
    assertEq(y < x, true);

    assertEq(x <= y, false);
    assertEq(y <= x, true);

    assertEq(x > y, true);
    assertEq(y > x, false);

    assertEq(x >= y, true);
    assertEq(y >= x, false);
  }
}

function Equal(xs, ys, n = ITERATIONS) {
  assertAllCombinationsTested(xs, ys, n);
  for (var i = 0; i < n; ++i) {
    var x = xs[i % xs.length];
    var y = ys[i % ys.length]|0; 

    assertEq(x == y, true);
    assertEq(y == x, true);

    assertEq(x != y, false);
    assertEq(y != x, false);

    assertEq(x < y, false);
    assertEq(y < x, false);

    assertEq(x <= y, true);
    assertEq(y <= x, true);

    assertEq(x > y, false);
    assertEq(y > x, false);

    assertEq(x >= y, true);
    assertEq(y >= x, true);
  }
}

function test(fn) {
  
  return Function(`return ${fn}`)();
}

const negativeInt32 = [-2147483648, -2147483647, -1];
const zeroInt32 = [0];
const positiveInt32 = [1, 2147483646, 2147483647];
const zeroOrPositiveInt32 = [...zeroInt32, ...positiveInt32];
const anyInt32 = [...negativeInt32, ...zeroInt32, ...positiveInt32];


function testLarge() {
  var xs = [
    2n ** 32n, 
    2n ** 64n, 
    2n ** 96n, 
  ];
  test(GreaterThan)(xs, anyInt32);

  var xs = [
    -(2n ** 32n), 
    -(2n ** 64n), 
    -(2n ** 96n), 
  ];
  test(LessThan)(xs, anyInt32);
}
testLarge();


function testZero() {
  var xs = [
    0n
  ];

  test(GreaterThan)(xs, negativeInt32);
  test(Equal)(xs, zeroInt32);
  test(LessThan)(xs, positiveInt32);
}
testZero();


function testNegative() {
  var xs = [
    -(2n ** 64n) - 2n,
    -(2n ** 64n) - 1n, 
    -(2n ** 64n),

    -(2n ** 32n) - 2n,
    -(2n ** 32n) - 1n, 
    -(2n ** 32n),

    -(2n ** 31n) - 1n, 
  ];
  test(LessThan)(xs, negativeInt32);

  var xs = [
    -(2n ** 31n), 
  ];
  test(Equal)(xs, [-2147483648]);
  test(LessThan)(xs, [-2147483647, -1]);

  var xs = [
    -(2n ** 31n) + 1n,
  ];
  test(GreaterThan)(xs, [-2147483648]);
  test(Equal)(xs, [-2147483647]);
  test(LessThan)(xs, [-1]);

  var xs = [
    -1n,
  ];
  test(GreaterThan)(xs, [-2147483648, -2147483647]);
  test(Equal)(xs, [-1]);
}
testNegative();


function testPositive() {
  var xs = [
    1n,
  ];
  test(GreaterThan)(xs, [0]);
  test(Equal)(xs, [1]);
  test(LessThan)(xs, [2147483646, 2147483647]);

  var xs = [
    2n ** 31n - 2n,
  ];
  test(GreaterThan)(xs, [0, 1]);
  test(Equal)(xs, [2147483646]);
  test(LessThan)(xs, [2147483647]);

  var xs = [
    2n ** 31n - 1n, 
  ];
  test(GreaterThan)(xs, [0, 1, 2147483646]);
  test(Equal)(xs, [2147483647]);

  var xs = [
    2n ** 31n, 

    2n ** 32n - 2n,
    2n ** 32n - 1n, 
    2n ** 32n,

    2n ** 64n - 2n,
    2n ** 64n - 1n, 
    2n ** 64n,
  ];
  test(GreaterThan)(xs, zeroOrPositiveInt32);
}
testPositive();


function testNegativePositive() {
  var xs = [
    -(2n ** 64n) - 2n,
    -(2n ** 64n) - 1n, 
    -(2n ** 64n),

    -(2n ** 32n) - 2n,
    -(2n ** 32n) - 1n, 
    -(2n ** 32n),

    -(2n ** 31n) - 1n,
    -(2n ** 31n), 
    -(2n ** 31n) + 1n,

    -2n, 
    -1n,
  ];
  test(LessThan)(xs, zeroOrPositiveInt32);
}
testNegativePositive();


function testPositiveNegative() {
  var xs = [
    1n,

    2n ** 31n - 2n,
    2n ** 31n - 1n, 
    2n ** 31n,

    2n ** 32n - 2n,
    2n ** 32n - 1n, 
    2n ** 32n,

    2n ** 64n - 2n,
    2n ** 64n - 1n, 
    2n ** 64n,
  ];
  test(GreaterThan)(xs, negativeInt32);
}
testPositiveNegative();
