





function foo() {
  return [] | 0 && values[0] || false;
};
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
try {
  foo();
} catch (e) {}
