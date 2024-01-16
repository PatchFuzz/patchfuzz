













try {
  eval ('Function("[]", 0)()');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
