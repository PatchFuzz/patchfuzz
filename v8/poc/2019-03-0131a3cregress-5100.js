





var a = [0, 1];
a["true"] = "true";
a["false"] = "false";
a["null"] = "null";
a["undefined"] = "undefined";


(function() {
  function f(x) { return a[x]; }

  %PrepareFunctionForOptimization(f);
  print(0, f(0));
  print(0, f(0));
  %OptimizeFunctionOnNextCall(f);
  print("true", f(true));
})();


(function() {
  function f( x) { return a[x]; }

  %PrepareFunctionForOptimization(f);
  print(0, f(0));
  print(0, f(0));
  %OptimizeFunctionOnNextCall(f);
  print("false", f(false));
})();


(function() {
  function f( x) { return a[x]; }

  %PrepareFunctionForOptimization(f);
  print(0, f(0));
  print(0, f(0));
  %OptimizeFunctionOnNextCall(f);
  print("null", f(null));
})();


(function() {
  function f( x) { return a[x]; }

  %PrepareFunctionForOptimization(f);
  print(0, f(0));
  print(0, f(0));
  %OptimizeFunctionOnNextCall(f);
  print("undefined", f(undefined));
})();
