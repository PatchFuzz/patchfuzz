














try {
  (new RegExp("[\\u0020")).exec("u");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

try {
  (new RegExp("[\\x20")).exec("x");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
