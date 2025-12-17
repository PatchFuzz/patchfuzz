(function TestStart() {
  let arr = [1,2,3,4];
  arr.fill(42, { toString() { arr.length = 0; } });
  print(4, arr.length);
  print([42,42,42,42], arr);
})();

(function TestEnd() {
  let arr = [1,2,3,4];
  arr.fill(42, 0, { toString() { arr.length = 0; return 4; } });
  print(4, arr.length);
  print([42,42,42,42], arr);
})();
