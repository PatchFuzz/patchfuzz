var xs = [
  new BigInt64Array(10),
  new BigUint64Array(10),
];


function storeConstantZero() {
  var value = 0n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeConstantZero();


function storeInlineDigits() {
  var value = 1n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeInlineDigits();


function storeInlineDigitsNegative() {
  var value = -1n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeInlineDigitsNegative();


function storeInlineDigitsTwoDigits() {
  var value = 4294967296n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeInlineDigitsTwoDigits();


function storeInlineDigitsTwoDigitsNegative() {
  var value = -4294967296n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeInlineDigitsTwoDigitsNegative();


function storeHeapDigits() {
  var value = 2n ** 1000n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeHeapDigits();


function storeHeapDigitsNegative() {
  var value = -(2n ** 1000n);

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeHeapDigitsNegative();


function storeFirstHeapDigits() {
  var value = 2n ** 64n;

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeFirstHeapDigits();


function storeFirstHeapDigitsNegative() {
  var value = -(2n ** 64n);

  for (var i = 0; i < 100; ++i) {
    var ta = xs[i & 1];
    ta[0] = value;
  }

  print(xs[0][0], BigInt.asIntN(64, value));
  print(xs[1][0], BigInt.asUintN(64, value));
}
storeFirstHeapDigitsNegative();
