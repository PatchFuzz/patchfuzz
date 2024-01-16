













let array = new Array(1);
array.splice(1, 0, array);

try {
  array.flat(Infinity);
  assert(false);
} catch (e) {
  assert(e instanceof RangeError)
}
