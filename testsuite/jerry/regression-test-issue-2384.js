













try {
  "[]{83}".match("(?=){12,8}");
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
