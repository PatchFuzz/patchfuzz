













try {
  eval('var { a, b, ...rest }"');
  assert(false);
} catch(e) {
  assert(e instanceof SyntaxError);
}
