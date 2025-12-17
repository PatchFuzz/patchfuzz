function foo() {
  Array(-1);
};
%PrepareFunctionForOptimization(foo);
print(foo, RangeError);
print(foo, RangeError);
%OptimizeFunctionOnNextCall(foo);
print(foo, RangeError);
