const intArrayConstructors = [
  Uint8Array,
  Int8Array,
  Uint16Array,
  Int16Array,
  Uint32Array,
  Int32Array,
  Uint8ClampedArray
];

const floatArrayConstructors = [
  Float32Array,
  Float64Array
];

const typedArrayConstructors = [...intArrayConstructors,
                                ...floatArrayConstructors];

for (let constructor of typedArrayConstructors) {
  
  
  let array = new constructor([2, 2]);
  print(2, array.length);

  Object.defineProperty(array, 'length', {value: 5});
  Array.prototype.fill.call(array, 5);

  print([5, 5], [array[0], array[1]]);
  print(undefined, array[2]);
}
