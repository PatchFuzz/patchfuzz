try {
  eval("var" + "\u2029" + 'g\\u0065t: break get' );
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
