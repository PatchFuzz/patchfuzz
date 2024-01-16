



const splice = Array.prototype.splice;
const unshift = Array.prototype.unshift;

{
  let a = {length: 2**53 - 1};
  assertThrows(() => unshift.call(a, 42), TypeError);
  assertEquals(unshift.call(a), 2**53 - 1);
}

{
  let a = {length: 2**53 - 1};
  assertThrows(() => splice.call(a, 0, 0, 42), TypeError);
  assertEquals(splice.call(a, 0, 1, 42).length, 1);
  assertEquals(a[0], 42);
}

{
  let a = {length: 2**53 - 1, [Symbol.isConcatSpreadable]: true};
  assertThrows(() => [42].concat(a), TypeError);
  assertThrows(() => [, ].concat(a), TypeError);
  assertThrows(() => [].concat(42, a), TypeError);
}
