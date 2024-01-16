



function arrayLikeToString(a) {
  return String.fromCharCode.apply(this, a);
}

const klasses = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
];
const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for (const klass of klasses) {
  const array = klass.from(string, s => s.charCodeAt(0));
  assertEquals(string, arrayLikeToString(array));
}
