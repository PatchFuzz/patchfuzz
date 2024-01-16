













try {
  eval("1_");
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
