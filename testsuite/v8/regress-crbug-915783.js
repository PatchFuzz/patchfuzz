





const constructors = [
  [Uint8Array, [0, 1]],
  [Int8Array, [0, 1]],
  [Uint16Array, [0, 1]],
  [Int16Array, [0, 1]],
  [Uint32Array, [0, 1]],
  [Int32Array, [0, 1]],
  [Float32Array, [0, 1]],
  [Float64Array, [0, 1]],
  [Uint8ClampedArray, [0, 1]],
  [BigInt64Array, [0n, 1n]],
  [BigUint64Array, [0n, 1n]]
];

let typedArray;
function detachBuffer() {
  %ArrayBufferDetach(typedArray.buffer);
  return 'a';
}
Number.prototype.toString = detachBuffer;
BigInt.prototype.toString = detachBuffer;
Number.prototype.toLocaleString = detachBuffer;
BigInt.prototype.toLocaleString = detachBuffer;

constructors.forEach(([constructor, arr]) => {
  typedArray = new constructor(arr);
  assertSame(typedArray.join(), '0,1');
  assertSame(typedArray.toLocaleString(), 'a,');
});
