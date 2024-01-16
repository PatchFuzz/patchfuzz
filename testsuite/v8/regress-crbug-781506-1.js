





function foo(a) {
  return a[0];
};
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo(x => x));
assertEquals(undefined, foo({}));
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo(x => x));
