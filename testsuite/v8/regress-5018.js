



var dv = new DataView(new ArrayBuffer(4), 2);

function getByteLength(a) {
  return a.byteLength;
}

assertEquals(2, getByteLength(dv));
assertEquals(2, getByteLength(dv));

Object.defineProperty(dv.__proto__, 'byteLength', {value: 42});

assertEquals(42, dv.byteLength);
assertEquals(42, getByteLength(dv));

function getByteOffset(a) {
  return a.byteOffset;
}

assertEquals(2, getByteOffset(dv));
assertEquals(2, getByteOffset(dv));

Object.defineProperty(dv.__proto__, 'byteOffset', {value: 42});

assertEquals(42, dv.byteOffset);
assertEquals(42, getByteOffset(dv));
