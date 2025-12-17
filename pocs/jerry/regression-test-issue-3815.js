function a() {}

try {
  eval('(a()) = a');
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
