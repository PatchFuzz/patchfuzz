





function foo() {
  return Number.isNaN();
};
%PrepareFunctionForOptimization(foo);
assertFalse(foo());
assertFalse(foo());
%OptimizeFunctionOnNextCall(foo);
assertFalse(foo());
