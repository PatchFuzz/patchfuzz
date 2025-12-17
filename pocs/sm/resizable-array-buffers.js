const scopes = [
  "SameProcess",
  "DifferentProcess",
  "DifferentProcessForIndexedDB",
];

function testInt32Array(scope) {
  var length = 4;
  var byteLength = length * Int32Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new ArrayBuffer(byteLength, {maxByteLength});
  print(ab.resizable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta1 = new Int32Array(ab);
  print(ta1.byteLength, byteLength);
  ta1.set([1, 87654321, -123]);
  print(ta1.toString(), "1,87654321,-123,0");

  var clonebuf = serialize(ta1, undefined, {scope});
  var ta2 = deserialize(clonebuf);
  print(ta2 instanceof Int32Array, true);
  print(ta2.byteLength, byteLength);
  print(ta2.toString(), "1,87654321,-123,0");
  print(ta2.buffer.resizable, true);
  print(ta2.buffer.byteLength, byteLength);
  print(ta2.buffer.maxByteLength, maxByteLength);

  ta2.buffer.resize(maxByteLength);
  print(ta2.byteLength, maxByteLength);
}
scopes.forEach(testInt32Array);

function testFloat64Array(scope) {
  var length = 4;
  var byteLength = length * Float64Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new ArrayBuffer(byteLength, {maxByteLength});
  print(ab.resizable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta1 = new Float64Array(ab);
  print(ta1.byteLength, byteLength);
  ta1.set([NaN, 3.14, 0, 0]);
  print(ta1.toString(), "NaN,3.14,0,0");

  var clonebuf = serialize(ta1, undefined, {scope});
  var ta2 = deserialize(clonebuf);
  print(ta2 instanceof Float64Array, true);
  print(ta2.byteLength, byteLength);
  print(ta2.toString(), "NaN,3.14,0,0");
  print(ta2.buffer.resizable, true);
  print(ta2.buffer.byteLength, byteLength);
  print(ta2.buffer.maxByteLength, maxByteLength);

  ta2.buffer.resize(maxByteLength);
  print(ta2.byteLength, maxByteLength);
}
scopes.forEach(testFloat64Array);

function testDataView(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new ArrayBuffer(byteLength, {maxByteLength});
  print(ab.resizable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta = new Uint8Array(ab);
  ta.set([5, 0, 255]);
  print(ta.toString(), "5,0,255,0");
  var dv1 = new DataView(ab);
  print(dv1.byteLength, byteLength);

  var clonebuf = serialize(dv1, undefined, {scope});
  var dv2 = deserialize(clonebuf);
  print(dv2 instanceof DataView, true);
  print(dv2.byteLength, byteLength);
  print(new Uint8Array(dv2.buffer).toString(), "5,0,255,0");
  print(dv2.buffer.resizable, true);
  print(dv2.buffer.byteLength, byteLength);
  print(dv2.buffer.maxByteLength, maxByteLength);

  dv2.buffer.resize(maxByteLength);
  print(dv2.byteLength, maxByteLength);
}
scopes.forEach(testDataView);

function testArrayBuffer(scope) {
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

  var clonebuf = serialize(ab, undefined, {scope});
  var ab2 = deserialize(clonebuf);
  print(ab2 instanceof ArrayBuffer, true);
  print(new Uint8Array(ab2).toString(), "33,44,55,66");
  print(ab2.resizable, true);
  print(ab2.byteLength, byteLength);
  print(ab2.maxByteLength, maxByteLength);

  ab2.resize(maxByteLength);
  print(ab2.byteLength, maxByteLength);
}
scopes.forEach(testArrayBuffer);
