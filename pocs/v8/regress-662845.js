function foo(x) {
  (function() {
    x = 1;
  })();
  return arguments[0];
};
%PrepareFunctionForOptimization(foo);
print(1, foo(42));
print(1, foo(42));
%OptimizeFunctionOnNextCall(foo);
print(1, foo(42));
