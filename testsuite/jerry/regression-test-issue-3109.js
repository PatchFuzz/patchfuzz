













var arrb = new ArrayBuffer(14);

try {
  var arr = new DataView(arrb, 13, Infinity);
  assert(false);
  arr.setUint32(9, -65536);
} catch (e) {
  assert(e instanceof RangeError);
}
