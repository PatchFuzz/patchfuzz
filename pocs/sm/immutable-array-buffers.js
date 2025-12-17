const scopes = [
  "SameProcess",
  "DifferentProcess",
  "DifferentProcessForIndexedDB",
];

function testInt32Array(scope) {
  var length = 4;
  var byteLength = length * Int32Array.BYTES_PER_ELEMENT;

  var ab = new ArrayBuffer(byteLength);
  print(ab.immutable, false);
  print(ab.byteLength, byteLength);

  var ta = new Int32Array(ab);
  ta.set([1, 87654321, -123]);

  var ita1 = new Int32Array(ab.transferToImmutable());
  print(ita1.byteLength, byteLength);
  print(ita1.toString(), "1,87654321,-123,0");
  print(ita1.buffer.immutable, true);

  var clonebuf = serialize(ita1, undefined, {scope});
  var ita2 = deserialize(clonebuf);
  print(ita2 instanceof Int32Array, true);
  print(ita2.byteLength, byteLength);
  print(ita2.toString(), "1,87654321,-123,0");
  print(ita2.buffer.immutable, true);
  print(ita2.buffer.byteLength, byteLength);
}
scopes.forEach(testInt32Array);

function testFloat64Array(scope) {
  var length = 4;
  var byteLength = length * Float64Array.BYTES_PER_ELEMENT;

  var ab = new ArrayBuffer(byteLength);
  print(ab.immutable, false);
  print(ab.byteLength, byteLength);

  var ta = new Float64Array(ab);
  ta.set([NaN, 3.14, 0, 0]);

  var ita1 = new Float64Array(ab.transferToImmutable());
  print(ita1.byteLength, byteLength);
  print(ita1.toString(), "NaN,3.14,0,0");
  print(ita1.buffer.immutable, true);

  var clonebuf = serialize(ita1, undefined, {scope});
  var ita2 = deserialize(clonebuf);
  print(ita2 instanceof Float64Array, true);
  print(ita2.byteLength, byteLength);
  print(ita2.toString(), "NaN,3.14,0,0");
  print(ita2.buffer.immutable, true);
  print(ita2.buffer.byteLength, byteLength);
}
scopes.forEach(testFloat64Array);

function testDataView(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;

  var ab = new ArrayBuffer(byteLength);
  print(ab.immutable, false);
  print(ab.byteLength, byteLength);

  var ta = new Uint8Array(ab);
  ta.set([5, 0, 255]);
  print(ta.toString(), "5,0,255,0");

  var idv1 = new DataView(ab.transferToImmutable());
  print(idv1.byteLength, byteLength);
  print(idv1.buffer.immutable, true);

  var clonebuf = serialize(idv1, undefined, {scope});
  var idv2 = deserialize(clonebuf);
  print(idv2 instanceof DataView, true);
  print(idv2.byteLength, byteLength);
  print(new Uint8Array(idv2.buffer).toString(), "5,0,255,0");
  print(idv2.buffer.immutable, true);
  print(idv2.buffer.byteLength, byteLength);
}
scopes.forEach(testDataView);

function testArrayBuffer(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;

  var ab = new ArrayBuffer(byteLength);
  print(ab.immutable, false);
  print(ab.byteLength, byteLength);

  var ta = new Uint8Array(ab);
  ta.set([33, 44, 55, 66]);
  print(ta.toString(), "33,44,55,66");

  var iab1 = ab.transferToImmutable();

  var clonebuf = serialize(iab1, undefined, {scope});
  var iab2 = deserialize(clonebuf);
  print(iab2 instanceof ArrayBuffer, true);
  print(new Uint8Array(iab2).toString(), "33,44,55,66");
  print(iab2.immutable, true);
  print(iab2.byteLength, byteLength);
}
scopes.forEach(testArrayBuffer);
