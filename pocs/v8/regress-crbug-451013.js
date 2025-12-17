print(function testDeepArrayLiteral() {
  testDeepArrayLiteral([], [], [[]]);
}, RangeError);

print(function testDeepObjectLiteral() {
  testDeepObjectLiteral({}, {}, {x:[[]]});
}, RangeError);
