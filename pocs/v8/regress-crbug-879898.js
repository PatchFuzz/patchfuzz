function foo() {
  return Symbol.toPrimitive++;
};
%PrepareFunctionForOptimization(foo);
print(foo);
%OptimizeFunctionOnNextCall(foo);
print(foo);
