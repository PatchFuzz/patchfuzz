





function foo(x) {
  return Math.imul(x | 0, 2);
};
%PrepareFunctionForOptimization(foo);
print(foo(1));
print(foo(1));
%OptimizeFunctionOnNextCall(foo);
print(foo(1));
