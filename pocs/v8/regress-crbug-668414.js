(function testSmiArrayConcat() {
  var result = [].concat([-12]);

  print(1, result.length);
  print([-12], result);
})();

(function testDoubleArrayConcat() {
  var result = [].concat([-1073741825]);

  print(1, result.length);
  print([-1073741825], result);
})();

(function testSmiArrayNonConcatSpreadable() {
  var array = [-10];
  array[Symbol.isConcatSpreadable] = false;
  var result = [].concat(array);

  print(1, result.length);
  print(1, result[0].length);
  print([-10], result[0]);
})();

(function testDoubleArrayNonConcatSpreadable() {
  var array = [-1073741825];
  array[Symbol.isConcatSpreadable] = false;
  var result = [].concat(array);

  print(1, result.length);
  print(1, result[0].length);
  print([-1073741825], result[0]);
})();

Array.prototype[Symbol.isConcatSpreadable] = false;


(function testSmiArray() {
  var result = [].concat([-12]);

  print(2, result.length);
  print(0, result[0].length);
  print(1, result[1].length);
  print([-12], result[1]);
})();

(function testDoubleArray() {
  var result = [].concat([-1073741825]);

  print(2, result.length);
  print(0, result[0].length);
  print(1, result[1].length);
  print([-1073741825], result[1]);
})();
