













try {
  new RegExp('"\\u', 'u');
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
