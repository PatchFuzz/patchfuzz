function foo() {
  return +({} + 1);
};
%PrepareFunctionForOptimization(foo);
print(NaN, foo());
print(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
