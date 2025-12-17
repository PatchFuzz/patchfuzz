const TypedArrays = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Uint8ClampedArray,
  Float16Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array,
];

function test(TA) {
  const length = 4;
  const byteLength = length * TA.BYTES_PER_ELEMENT;

  let iab = new ArrayBuffer(byteLength).transferToImmutable();
  let actual = new TA(iab);
  let expected = new TA(length);
  let type = expected[0].constructor;

  
  for (let i = 0; i < 200; ++i) {
    let index = i % length;

    actual[index] = type(i);

    print(actual[index], expected[index]);
  }

  
  for (let i = 0; i < 200; ++i) {
    let index = i % (length + 4);

    actual[index] = type(i);

    print(actual[index], expected[index]);
  }
}

for (let TA of TypedArrays) {
  
  let copy = Function(`return ${test}`)();

  copy(TA);
}
