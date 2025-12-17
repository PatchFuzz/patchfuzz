var xs = [
  new BigInt64Array(10),
  new BigUint64Array(10),
];


function loadConstantZero() {
  var value = 0n;

  xs[0][0] = value;
  xs[1][0] = value;

  var ys = [
    BigInt.asIntN(64, value),
    BigInt.asUintN(64, value),
  ];

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    print(ta[0], ys[i & 1]);
  }
}
loadConstantZero();


function loadInlineDigits() {
  var value = 1n;

  xs[0][0] = value;
  xs[1][0] = value;

  var ys = [
    BigInt.asIntN(64, value),
    BigInt.asUintN(64, value),
  ];

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    print(ta[0], ys[i & 1]);
  }
}
loadInlineDigits();


function loadInlineDigitsNegative() {
  var value = -1n;

  xs[0][0] = value;
  xs[1][0] = value;

  var ys = [
    BigInt.asIntN(64, value),
    BigInt.asUintN(64, value),
  ];

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    print(ta[0], ys[i & 1]);
  }
}
loadInlineDigitsNegative();


function loadInlineDigitsTwoDigits() {
  var value = 4294967296n;

  xs[0][0] = value;
  xs[1][0] = value;

  var ys = [
    BigInt.asIntN(64, value),
    BigInt.asUintN(64, value),
  ];

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    print(ta[0], ys[i & 1]);
  }
}
loadInlineDigitsTwoDigits();


function loadInlineDigitsTwoDigitsNegative() {
  var value = -4294967296n;

  xs[0][0] = value;
  xs[1][0] = value;

  var ys = [
    BigInt.asIntN(64, value),
    BigInt.asUintN(64, value),
  ];

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    print(ta[0], ys[i & 1]);
  }
}
loadInlineDigitsTwoDigitsNegative();
