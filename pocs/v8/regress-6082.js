function foo() {
  return Number.isNaN();
};
%PrepareFunctionForOptimization(foo);
print(foo());
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
