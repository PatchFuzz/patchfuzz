



assertThrows(function testDeepArrayLiteral() {
  testDeepArrayLiteral([], [], [[]]);
}, RangeError);

assertThrows(function testDeepObjectLiteral() {
  testDeepObjectLiteral({}, {}, {x:[[]]});
}, RangeError);
