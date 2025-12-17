(function testUnshift() {
  a = [1];
  function f() {
    return a;
  }
  b = Array.of.call(f);
  b.unshift(2);
  print(b, [2]);
})();



(function testInsertionPastEnd() {
  a = [9,9,9,9];
  function f() {
    return a;
  }
  b = Array.of.call(f,1,2);
  b[4] = 1;
  print(b, [1, 2, , , 1]);
})();



(function testFrozenArrayThrows() {
  function f() {
    return Object.freeze([1,2,3]);
  }
  print(function() { Array.of.call(f); }, TypeError);
})();
