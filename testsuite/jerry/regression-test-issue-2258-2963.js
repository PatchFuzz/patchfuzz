













try {
  JSON.stringify(10, Array);
  assert(false);
} catch (e) {
  assert(e instanceof RangeError);
}
