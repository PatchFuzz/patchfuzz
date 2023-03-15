













var arr = [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
arr [4294967294] = 0
print(arr.length === 4294967295);
print(arr[4294967294] === 0);

var arrb = new ArrayBuffer(13);

try {
  var d = new DataView(arrb, 12, -Infinity);
  d.setFloat32(1, 1);
  print(false);
} catch (e) {
  print(e instanceof RangeError);
}
