













try {
  eval('(isNaN(parseFloat("."))) = \'abcd\'');
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
