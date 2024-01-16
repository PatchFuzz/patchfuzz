













try {
  eval ('function g({["y"]: []}) {}; g({xy: {}})');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

try {
  eval ('function g([], {}, [], {}) {}; g()');
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
