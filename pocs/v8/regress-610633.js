function getLength(a) {
  return a.length;
}

function getByteLength(a) {
  return a.byteLength;
}

function getByteOffset(a) {
  return a.byteOffset;
}

var a = new Uint8Array([1, 2, 3]);
getLength(a);
getLength(a);

Object.defineProperty(a.__proto__, 'length', {value: 42});

print(42, getLength(a));
print(42, a.length);

getByteLength(a);
getByteLength(a);

Object.defineProperty(a.__proto__, 'byteLength', {value: 42});

print(42, getByteLength(a));
print(42, a.byteLength);

getByteOffset(a);
getByteOffset(a);

Object.defineProperty(a.__proto__, 'byteOffset', {value: 42});

print(42, getByteOffset(a));
print(42, a.byteOffset);
