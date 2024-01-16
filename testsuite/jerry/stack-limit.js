













function f () {
  f();
}

try {
  f();
  assert(false);
} catch (e) {
  assert(e instanceof RangeError);
}
