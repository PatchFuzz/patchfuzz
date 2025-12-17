function foo() {
  return 'x'[0];
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
print("x", foo());
