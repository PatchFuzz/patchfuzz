













try {
  eval('0x1_');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
