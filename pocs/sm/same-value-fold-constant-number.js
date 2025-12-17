function SameValue(x, y) {
    if (x === y) {
        return (x !== 0) || (1 / x === 1 / y);
    }
    return (x !== x && y !== y);
}

var xs = [
  NaN,
  +0,
  -0,
  1,
  1.5,
  -1.5,
  Infinity,
  -Infinity,
];


function testNaN() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(typeof x, "number");
    print(Object.is(NaN, x), x !== x);
    print(Object.is(x, NaN), x !== x);
  }
}
for (let i = 0; i < 2; ++i) testNaN();


function testPositiveZero() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(typeof x, "number");
    print(Object.is(+0, x), SameValue(x, +0));
    print(Object.is(x, +0), SameValue(x, +0));
  }
}
for (let i = 0; i < 2; ++i) testPositiveZero();


function testNegativeZero() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(typeof x, "number");
    print(Object.is(-0, x), SameValue(x, -0));
    print(Object.is(x, -0), SameValue(x, -0));
  }
}
for (let i = 0; i < 2; ++i) testNegativeZero();


function testInt32() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(typeof x, "number");
    print(Object.is(1, x), x === 1);
    print(Object.is(x, 1), x === 1);
  }
}
for (let i = 0; i < 2; ++i) testInt32();



function testDouble() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(typeof x, "number");
    print(Object.is(1.5, x), x === 1.5);
    print(Object.is(x, 1.5), x === 1.5);
  }
}
for (let i = 0; i < 2; ++i) testDouble();
