














try {
  ((new RegExp("[\\u0")).exec("u"));
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

try {
  ((new RegExp("[\\x0")).exec("x"));
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
