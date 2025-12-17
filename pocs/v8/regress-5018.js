var dv = new DataView(new ArrayBuffer(4), 2);

function getByteLength(a) {
  return a.byteLength;
}

print(2, getByteLength(dv));
print(2, getByteLength(dv));

Object.defineProperty(dv.__proto__, 'byteLength', {value: 42});

print(42, dv.byteLength);
print(42, getByteLength(dv));

function getByteOffset(a) {
  return a.byteOffset;
}

print(2, getByteOffset(dv));
print(2, getByteOffset(dv));

Object.defineProperty(dv.__proto__, 'byteOffset', {value: 42});

print(42, dv.byteOffset);
print(42, getByteOffset(dv));
