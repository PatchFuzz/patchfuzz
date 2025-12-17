function bar() {
  var radix = 10;
  return 21 / radix | 0;
};
%PrepareFunctionForOptimization(bar);
print(2, bar());
print(2, bar());
%OptimizeFunctionOnNextCall(bar);
print(2, bar());
