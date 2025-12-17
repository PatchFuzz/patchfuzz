(function InlinedThrowAtEndOfTry() {
  function g() {
    %DeoptimizeFunction(f);
    throw "boom";
  }
  function f() {
    try {
      g();  
    } catch (e) {
      print('boom', e);
    }
  };
  %PrepareFunctionForOptimization(f);
  print(f);
  print(f);
  %OptimizeFunctionOnNextCall(f);
  print(f);
})();

(function InlinedThrowInFrontOfTry() {
  function g() {
    %DeoptimizeFunction(f);
    throw "boom";
  }
  function f() {
    g();  
    try {
      Math.random();
    } catch (e) {
      print();
    }
  };
  %PrepareFunctionForOptimization(f);
  print(f);
  print(f);
  %OptimizeFunctionOnNextCall(f);
  print(f);
})();
