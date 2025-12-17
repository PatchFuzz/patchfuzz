(function(){
  function f(x) {
    return "abcd".charCodeAt(BigInt.asUintN(64, 10n));
  }

  %PrepareFunctionForOptimization(f);
  try { f(1); } catch(e) {}
  try { f(1); } catch(e) {}
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();


(function(){
  function f(x) {
    return "abcd".charCodeAt(BigInt.asUintN(2, 10n));
  }

  %PrepareFunctionForOptimization(f);
  try { f(1); } catch(e) {}
  try { f(1); } catch(e) {}
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();
