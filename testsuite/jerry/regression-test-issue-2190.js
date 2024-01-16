













try {
  /(?:(?=x)){10000}xyz/.exec('xyz');
  assert(false);
} catch (e) {
  assert(e instanceof RangeError);
}
