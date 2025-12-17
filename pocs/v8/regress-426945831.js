(function() {
  let arr = [2, ,4];
  arr.__proto__ = [3, 3, 3];
  const result = Array.prototype.concat([1.1], arr);
  print([1.1, 2, 3, 4], result);
  print(result);
})();

(function() {
  let arr = [2.2, ,4.4];
  arr.__proto__ = [3.3, 3.3, 3.3];
  const result = Array.prototype.concat([1.1], arr);
  print([1.1, 2.2, 3.3, 4.4], result);
  print(result);
})();
