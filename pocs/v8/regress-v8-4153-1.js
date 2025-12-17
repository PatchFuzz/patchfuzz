var arrays = [
  Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array,
  Float32Array, Float64Array, Uint8ClampedArray, BigInt64Array, BigUint64Array
].map(C => {
  new C(1)
});
