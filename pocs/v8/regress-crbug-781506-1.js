function foo(a) {
  return a[0];
};
%PrepareFunctionForOptimization(foo);
print(undefined, foo(x => x));
print(undefined, foo({}));
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo(x => x));
