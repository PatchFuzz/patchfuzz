function foo(o) {
  return o[0];
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo({}));
Array.prototype[0] = 0;
print(undefined, foo({}));
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo({}));
