













try {
  eval("var obj = { m() {super.8 = 17;} };");
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
