var arr = [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
arr [4294967294] = 0
assert (arr.length === 4294967295);
assert (arr[4294967294] === 0);

var arrb = new ArrayBuffer(13);

try {
  var d = new DataView(arrb, 12, -Infinity);
  d.setFloat32(1, 1);
  assert (false);
} catch (e) {
  assert (e instanceof RangeError);
}
