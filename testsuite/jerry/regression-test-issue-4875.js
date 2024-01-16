













try {
  Atomics.sub({});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
