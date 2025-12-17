function testNot() {
  for (var i = 0; i < 100; i++) {
    print(!BigInt(-1), false);
    print(!BigInt(0), true);
    print(!BigInt(1), false);
  }
}
testNot();

function testOr() {
  for (var i = 0; i < 100; i++) {
    var b0 = BigInt(0);
    var b5 = BigInt(5);
    print(b5 || b0, b5);
    print(b5 || 1, b5);
    print(b0 || b5, b5);
    print(1 || b5, 1);
  }
}
testOr();

function testAnd() {
  for (var i = 0; i < 100; i++) {
    var b0 = BigInt(0);
    var b1 = BigInt(1);
    print(1 && b1, b1);
    print(b0 && b1, b0);
    print(b1 && b0, b0);
    print(b1 && 1, 1);
  }
}
testAnd();
