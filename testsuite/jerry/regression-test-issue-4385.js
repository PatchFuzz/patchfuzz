













try {
  eval('P`${*\x10$');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}
