













try {
  Array.from.call(String, $);
  function $() {}
  assert(fasle);
} catch (e) {
  assert(e instanceof TypeError);
}
