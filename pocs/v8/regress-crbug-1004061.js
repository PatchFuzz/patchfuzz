(function testPackedDoublesIncludes() {
  arr = [1.5, 2.5];
  arr.length = 0;
  function f() {
    return arr.includes(1);
  };
  %PrepareFunctionForOptimization(f);
  print(f(), false);
  %OptimizeFunctionOnNextCall(f);
  print(f(), false);
})();

(function testHoleyDoublesIncludes() {
  arr = [1.1];
  arr[3]= 1.5;
  arr.length = 0;
  function f() {
    return arr.includes(1);
  };
  %PrepareFunctionForOptimization(f);
  print(f(), false);
  %OptimizeFunctionOnNextCall(f);
  print(f(), false);
})();

(function testPackedDoublesIndexOf() {
  arr = [1.5, 2.5];
  arr.length = 0;
  function f() {
    return arr.indexOf(1);
  };
  %PrepareFunctionForOptimization(f);
  print(f(), -1);
  %OptimizeFunctionOnNextCall(f);
  print(f(), -1);
})();

(function testHoleyDoublesIndexOf() {
  arr = [1.1];
  arr[3]= 1.5;
  arr.length = 0;
  function f() {
    return arr.indexOf(1);
  };
  %PrepareFunctionForOptimization(f);
  print(f(), -1);
  %OptimizeFunctionOnNextCall(f);
  print(f(), -1);
})();
