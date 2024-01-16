













function* g(a) {
    yield* a;
    return -3.14;
}

try {
  var iter = g("foo" + "bar");
  new WeakMap(iter);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
