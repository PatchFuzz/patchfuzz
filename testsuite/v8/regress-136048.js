


























try {
  eval("/foo/\\u0069")
} catch (e) {
  assertEquals(
      "SyntaxError: Invalid regular expression flags",
      e.toString());
}
