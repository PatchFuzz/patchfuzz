


const INLINE_MEMORY_LENGTH = 1;

function gcValue(value) {
  return {
    valueOf() {
      minorgc();
      return value;
    }
  };
};


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);

  Atomics.store(ta, 0, gcValue(1));

  assertEq(ta[0], 1);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 1;

  let val = Atomics.compareExchange(ta, 0, 1, gcValue(2));

  assertEq(val, 1);
  assertEq(ta[0], 2);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 1;

  let val = Atomics.exchange(ta, 0, gcValue(2));

  assertEq(val, 1);
  assertEq(ta[0], 2);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 1;

  let val = Atomics.add(ta, 0, gcValue(2));

  assertEq(val, 1);
  assertEq(ta[0], 3);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 3;

  let val = Atomics.sub(ta, 0, gcValue(2));

  assertEq(val, 3);
  assertEq(ta[0], 1);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 3;

  let val = Atomics.and(ta, 0, gcValue(1));

  assertEq(val, 3);
  assertEq(ta[0], 1);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 2;

  let val = Atomics.or(ta, 0, gcValue(1));

  assertEq(val, 2);
  assertEq(ta[0], 3);
}


{
  let ta = new Int32Array(INLINE_MEMORY_LENGTH);
  ta[0] = 3;

  let val = Atomics.xor(ta, 0, gcValue(1));

  assertEq(val, 3);
  assertEq(ta[0], 2);
}
