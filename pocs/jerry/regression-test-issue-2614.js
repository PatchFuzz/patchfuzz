try {
  eval(".5.");
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError);
}
