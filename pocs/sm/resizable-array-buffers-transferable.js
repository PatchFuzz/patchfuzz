const scopes = [
  "SameProcess",
  "DifferentProcess",
  "DifferentProcessForIndexedDB",
];

function testArrayBufferTransferable(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new ArrayBuffer(byteLength, {maxByteLength});
  print(ab.resizable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta = new Uint8Array(ab);
  ta.set([33, 44, 55, 66]);
  print(ta.toString(), "33,44,55,66");

  var clonebuf = serialize(ab, [ab], {scope});
  var ab2 = deserialize(clonebuf);
  print(ab2 instanceof ArrayBuffer, true);
  print(new Uint8Array(ab2).toString(), "33,44,55,66");
  print(ab2.resizable, true);
  print(ab2.byteLength, byteLength);
  print(ab2.maxByteLength, maxByteLength);

  print(ab.detached, true);
  print(ab2.detached, false);

  ab2.resize(maxByteLength);
  print(ab2.byteLength, maxByteLength);
}
scopes.forEach(testArrayBufferTransferable);
