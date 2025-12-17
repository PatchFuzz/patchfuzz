try {
  eval("/foo/\\u0069")
} catch (e) {
  print(
      "SyntaxError: Invalid regular expression flags",
      e.toString());
}
