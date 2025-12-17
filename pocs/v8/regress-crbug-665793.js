function foo() {
  return 'x'[1];
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo());
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo());
