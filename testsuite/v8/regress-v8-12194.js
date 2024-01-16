






(function TestSliceWithoutParams() {
  let array = [0, 1, 2];

  function f() {
    let array2 = array.slice();
    array2[1] = array2[0];
  }

  %PrepareFunctionForOptimization(f);
  f();
  %OptimizeFunctionOnNextCall(f);
  f();

  
  assertOptimized(f);
})();

(function TestSliceWithStartZero() {
  let array = [0, 1, 2];

  function f() {
    let array2 = array.slice(0);
    array2[1] = array2[0];
  }

  %PrepareFunctionForOptimization(f);
  f();
  %OptimizeFunctionOnNextCall(f);
  f();

  
  assertOptimized(f);
})();

(function TestSliceWithStartNonZero() {
  let array = [0, 1, 2];

  function f() {
    let array2 = array.slice(1);
    array2[1] = array2[0];
  }

  %PrepareFunctionForOptimization(f);
  f();
  %OptimizeFunctionOnNextCall(f);
  f();

  
  assertOptimized(f);
})();

(function TestSliceWithStartZeroEndNonUndefined() {
  let array = [0, 1, 2];

  function f() {
    let array2 = array.slice(0, 1);
    array2[1] = array2[0];
  }

  %PrepareFunctionForOptimization(f);
  f();
  %OptimizeFunctionOnNextCall(f);
  f();

  
  assertOptimized(f);
})();