





function foo() {
  return Symbol.toPrimitive++;
};
%PrepareFunctionForOptimization(foo);
assertThrows(foo);
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo);
