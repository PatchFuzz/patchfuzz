;

const scopes = [
  "SameProcess",
  "DifferentProcess",
  "DifferentProcessForIndexedDB",
];

function testArrayBufferTransferable(scope) {
  var length = 4;
  var byteLength = length * Uint8Array.BYTES_PER_ELEMENT;

  var ab = new ArrayBuffer(byteLength);
  print(ab.immutable, false);
  print(ab.byteLength, byteLength);

  var ta = new Uint8Array(ab);
  ta.set([33, 44, 55, 66]);

  var iab = ab.transferToImmutable();
  var ita = new Uint8Array(iab);

  print(ab.detached, true);
  print(iab.detached, false);
  print(ita.toString(), "33,44,55,66");

  print(() => serialize(iab, [iab], {scope}), TypeError);

  print(ab.detached, true);
  print(iab.detached, false);
  print(ita.toString(), "33,44,55,66");
}
scopes.forEach(testArrayBufferTransferable);
