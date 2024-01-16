













var str = "123" + "test123";

try {
  str.repeat([1073741823]);
  assert(false);
} catch (e) {
  assert (e instanceof RangeError);
}
