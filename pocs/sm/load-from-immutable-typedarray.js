const IntTypedArrays = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  BigInt64Array,
  BigUint64Array,
];

function test(TA) {
  const length = 4;

  let expected = new TA(length);
  let type = expected[0].constructor;

  for (let i = 0; i < length; ++i) {
    expected[i] = type(i + 1);
  }

  let actual = new TA(expected.buffer.sliceToImmutable());
  print(actual.buffer.immutable, true);

  for (let i = 0; i < 200; ++i) {
    let index = i % length;
    print(Atomics.;
  }
}

for (let TA of IntTypedArrays) {
  
  let copy = Function(`return ${test}`)();

  for (let i = 0; i < 2; ++i) copy(TA);
}
