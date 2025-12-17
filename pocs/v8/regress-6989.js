(function() {
  function foo(o) { o["x"] = 1; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(undefined));
  print(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(undefined));
  print(foo);
})();

(function() {
  function foo(o) { o["x"] = 1; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(null));
  print(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(null));
  print(foo);
})();

(function() {
  function foo(o) { return o["x"]; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(undefined));
  print(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(undefined));
  print(foo);
})();

(function() {
  function foo(o) { return o["x"]; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(null));
  print(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(null));
  print(foo);
})();

(function() {
  function foo(o) { o.x = 1; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(undefined));
  print(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(undefined));
  print(foo);
})();

(function() {
  function foo(o) { o.x = 1; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(null));
  print(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(null));
  print(foo);
})();

(function() {
  function foo(o) { return o.x; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(undefined));
  print(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(undefined));
  print(foo);
})();

(function() {
  function foo(o) { return o.x; }

  %PrepareFunctionForOptimization(foo);
  print(() => foo(null));
  print(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  print(() => foo(null));
  print(foo);
})();
