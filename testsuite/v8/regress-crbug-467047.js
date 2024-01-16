





function captureMatch(re) {
  var local_variable = 0;
  "abcd".replace(re, function() { });
  assertEquals("abcd", RegExp.input);
  assertEquals("a", RegExp.leftContext);
  assertEquals("bc", RegExp.lastMatch);
  assertEquals("d", RegExp.rightContext);
  assertEquals("foo", captureMatch(/^bar/));
}

assertThrows(function() { captureMatch(/(bc)/) }, RangeError);
