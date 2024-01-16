













try {
  eval('typeof (global.v2) = 123');
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
