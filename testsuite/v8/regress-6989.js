





(function() {
  function foo(o) { o["x"] = 1; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(undefined));
  assertThrows(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(undefined));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { o["x"] = 1; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(null));
  assertThrows(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(null));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { return o["x"]; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(undefined));
  assertThrows(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(undefined));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { return o["x"]; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(null));
  assertThrows(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(null));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { o.x = 1; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(undefined));
  assertThrows(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(undefined));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { o.x = 1; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(null));
  assertThrows(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(null));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { return o.x; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(undefined));
  assertThrows(() => foo(undefined));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(undefined));
  assertOptimized(foo);
})();

(function() {
  function foo(o) { return o.x; }

  %PrepareFunctionForOptimization(foo);
  assertThrows(() => foo(null));
  assertThrows(() => foo(null));
  %OptimizeFunctionOnNextCall(foo);
  assertThrows(() => foo(null));
  assertOptimized(foo);
})();
