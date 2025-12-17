(function TestGrow() {
  let array = [0,1,2,3];
  function f(e) {
    array[4] = 42;
    return e;
  }
  print(array.flatMap(f), [0,1,2,3]);
})();

(function TestGrow2() {
  let array = [0,1];
  let depth = {
    valueOf() {
      array.push(2);
      array.push(3);
      return 10000;
    }
  };
  print(array.flat(depth), [0,1]);
  print(array, [0,1,2,3]);
})();

(function TestShrink() {
  let array = [0,1,2,3];
  function f(e) {
    array.length = 3;
    return e;
  }
  print(array.flatMap(f), [0,1,2]);
})();
