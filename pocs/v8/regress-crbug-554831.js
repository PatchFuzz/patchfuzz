(function() {
  var key = "s";
  function f(object) { return object[key]; };
  %PrepareFunctionForOptimization(f);
  f("");
  f("");
  %OptimizeFunctionOnNextCall(f);
  f("");
  print(f);
})();
