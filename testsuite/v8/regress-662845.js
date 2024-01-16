





function foo(x) {
  (function() {
    x = 1;
  })();
  return arguments[0];
};
%PrepareFunctionForOptimization(foo);
assertEquals(1, foo(42));
assertEquals(1, foo(42));
%OptimizeFunctionOnNextCall(foo);
assertEquals(1, foo(42));
