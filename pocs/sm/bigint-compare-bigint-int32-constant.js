function LessThan(xs) {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x == INT32, false);
    print(INT32 == x, false);

    print(x != INT32, true);
    print(INT32 != x, true);

    print(x < INT32, true);
    print(INT32 < x, false);

    print(x <= INT32, true);
    print(INT32 <= x, false);

    print(x > INT32, false);
    print(INT32 > x, true);

    print(x >= INT32, false);
    print(INT32 >= x, true);
  }
}

function GreaterThan(xs) {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x == INT32, false);
    print(INT32 == x, false);

    print(x != INT32, true);
    print(INT32 != x, true);

    print(x < INT32, false);
    print(INT32 < x, true);

    print(x <= INT32, false);
    print(INT32 <= x, true);

    print(x > INT32, true);
    print(INT32 > x, false);

    print(x >= INT32, true);
    print(INT32 >= x, false);
  }
}

function Equal(xs) {
  for (var i = 0; i < 100; ++i) {
    var x = xs[i % xs.length];

    print(x == INT32, true);
    print(INT32 == x, true);

    print(x != INT32, false);
    print(INT32 != x, false);

    print(x < INT32, false);
    print(INT32 < x, false);

    print(x <= INT32, true);
    print(INT32 <= x, true);

    print(x > INT32, false);
    print(INT32 > x, false);

    print(x >= INT32, true);
    print(INT32 >= x, true);
  }
}

function test(fn, xs, ys) {
  
  for (let y of ys) {
    let copy = Function(`return ${fn}`.replaceAll("INT32", `${(y|0)}n`))();
    copy(xs);
  }
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
  test(GreaterThan, xs, anyInt32);

  var xs = [
    -(2n ** 32n), 
    -(2n ** 64n), 
    -(2n ** 96n), 
  ];
  test(LessThan, xs, anyInt32);
}
testLarge();


function testZero() {
  var xs = [
    0n
  ];

  test(GreaterThan, xs, negativeInt32);
  test(Equal, xs, zeroInt32);
  test(LessThan, xs, positiveInt32);
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
  test(LessThan, xs, negativeInt32);

  var xs = [
    -(2n ** 31n), 
  ];
  test(Equal, xs, [-2147483648]);
  test(LessThan, xs, [-2147483647, -1]);

  var xs = [
    -(2n ** 31n) + 1n,
  ];
  test(GreaterThan, xs, [-2147483648]);
  test(Equal, xs, [-2147483647]);
  test(LessThan, xs, [-1]);

  var xs = [
    -1n,
  ];
  test(GreaterThan, xs, [-2147483648, -2147483647]);
  test(Equal, xs, [-1]);
}
testNegative();


function testPositive() {
  var xs = [
    1n,
  ];
  test(GreaterThan, xs, [0]);
  test(Equal, xs, [1]);
  test(LessThan, xs, [2147483646, 2147483647]);

  var xs = [
    2n ** 31n - 2n,
  ];
  test(GreaterThan, xs, [0, 1]);
  test(Equal, xs, [2147483646]);
  test(LessThan, xs, [2147483647]);

  var xs = [
    2n ** 31n - 1n, 
  ];
  test(GreaterThan, xs, [0, 1, 2147483646]);
  test(Equal, xs, [2147483647]);

  var xs = [
    2n ** 31n, 

    2n ** 32n - 2n,
    2n ** 32n - 1n, 
    2n ** 32n,

    2n ** 64n - 2n,
    2n ** 64n - 1n, 
    2n ** 64n,
  ];
  test(GreaterThan, xs, zeroOrPositiveInt32);
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
  test(LessThan, xs, zeroOrPositiveInt32);
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
  test(GreaterThan, xs, negativeInt32);
}
testPositiveNegative();
