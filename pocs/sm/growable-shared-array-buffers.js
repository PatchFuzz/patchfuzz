const scopes = [
  "SameProcess",
];

const g = newGlobal({enableCoopAndCoep: true});

const options = {
  SharedArrayBuffer: "allow",
};

function testInt32Array(scope) {
  var length = 4;
  var byteLength = length * Int32Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new SharedArrayBuffer(byteLength, {maxByteLength});
  print(ab.growable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta1 = new Int32Array(ab);
  print(ta1.byteLength, byteLength);
  ta1.set([1, 87654321, -123]);
  print(ta1.toString(), "1,87654321,-123,0");

  var clonebuf = g.serialize(ta1, undefined, {scope, ...options});
  var ta2 = g.deserialize(clonebuf, {...options});
  print(ta2 instanceof g.Int32Array, true);
  print(ta2.byteLength, byteLength);
  print(ta2.toString(), "1,87654321,-123,0");
  print(ta2.buffer.growable, true);
  print(ta2.buffer.byteLength, byteLength);
  print(ta2.buffer.maxByteLength, maxByteLength);

  ta2.buffer.grow(maxByteLength);
  print(ta2.byteLength, maxByteLength);
}
scopes.forEach(testInt32Array);

function testFloat64Array(scope) {
  var length = 4;
  var byteLength = length * Float64Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new SharedArrayBuffer(byteLength, {maxByteLength});
  print(ab.growable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta1 = new Float64Array(ab);
  print(ta1.byteLength, byteLength);
  ta1.set([NaN, 3.14, 0, 0]);
  print(ta1.toString(), "NaN,3.14,0,0");

  var clonebuf = g.serialize(ta1, undefined, {scope, ...options});
  var ta2 = g.deserialize(clonebuf, {...options});
  print(ta2 instanceof g.Float64Array, true);
  print(ta2.byteLength, byteLength);
  print(ta2.toString(), "NaN,3.14,0,0");
  print(ta2.buffer.growable, true);
  print(ta2.buffer.byteLength, byteLength);
  print(ta2.buffer.maxByteLength, maxByteLength);

  ta2.buffer.grow(maxByteLength);
  print(ta2.byteLength, maxByteLength);
}
scopes.forEach(testFloat64Array);

function testDataView(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new SharedArrayBuffer(byteLength, {maxByteLength});
  print(ab.growable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta = new Uint8Array(ab);
  ta.set([5, 0, 255]);
  print(ta.toString(), "5,0,255,0");
  var dv1 = new DataView(ab);
  print(dv1.byteLength, byteLength);

  var clonebuf = g.serialize(dv1, undefined, {scope, ...options});
  var dv2 = g.deserialize(clonebuf, {...options});
  print(dv2 instanceof g.DataView, true);
  print(dv2.byteLength, byteLength);
  print(new Uint8Array(dv2.buffer).toString(), "5,0,255,0");
  print(dv2.buffer.growable, true);
  print(dv2.buffer.byteLength, byteLength);
  print(dv2.buffer.maxByteLength, maxByteLength);

  dv2.buffer.grow(maxByteLength);
  print(dv2.byteLength, maxByteLength);
}
scopes.forEach(testDataView);

function testArrayBuffer(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;
  var maxByteLength = 2 * byteLength;

  var ab = new SharedArrayBuffer(byteLength, {maxByteLength});
  print(ab.growable, true);
  print(ab.byteLength, byteLength);
  print(ab.maxByteLength, maxByteLength);

  var ta = new Uint8Array(ab);
  ta.set([33, 44, 55, 66]);
  print(ta.toString(), "33,44,55,66");

  var clonebuf = g.serialize(ab, undefined, {scope, ...options});
  var ab2 = g.deserialize(clonebuf, {...options});
  print(ab2 instanceof g.SharedArrayBuffer, true);
  print(new Uint8Array(ab2).toString(), "33,44,55,66");
  print(ab2.growable, true);
  print(ab2.byteLength, byteLength);
  print(ab2.maxByteLength, maxByteLength);

  ab2.grow(maxByteLength);
  print(ab2.byteLength, maxByteLength);
}
scopes.forEach(testArrayBuffer);
