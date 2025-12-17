const splice = Array.prototype.splice;
const unshift = Array.prototype.unshift;

{
  let a = {length: 2**53 - 1};
  print(() => unshift.call(a, 42), TypeError);
  print(unshift.call(a), 2**53 - 1);
}

{
  let a = {length: 2**53 - 1};
  print(() => splice.call(a, 0, 0, 42), TypeError);
  print(splice.call(a, 0, 1, 42).length, 1);
  print(a[0], 42);
}

{
  let a = {length: 2**53 - 1, [Symbol.isConcatSpreadable]: true};
  print(() => [42].concat(a), TypeError);
  print(() => [, ].concat(a), TypeError);
  print(() => [].concat(42, a), TypeError);
}
