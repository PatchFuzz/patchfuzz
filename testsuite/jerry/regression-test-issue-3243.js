













try {
  (new Int8Array((new ArrayBuffer()), 1, Infinity)).reverse()
  assert(false);
} catch (e) {
  assert (e instanceof RangeError);
}
