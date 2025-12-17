let ar0 = Array(0xabcdef).fill(7);

(function TestFastArrayConcat() {
  let ar = [153];
  print(%HasDictionaryElements(ar));

  let args = Array(12).fill(ar0);
  print(() => ar.concat(...args), RangeError, /Invalid array length/);
})();

(function TestSlowArrayConcat() {
  let ar = [];
  Object.defineProperty(ar, 0, {value:42, configurable: true});
  print(%HasDictionaryElements(ar));

  let args = Array(12).fill(ar0);
  print(() => ar.concat(...args), RangeError, /Invalid array length/);
})();
