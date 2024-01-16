





function foo(o) {
  return o[0];
};
%PrepareFunctionForOptimization(foo);
assertEquals(undefined, foo({}));
Array.prototype[0] = 0;
assertEquals(undefined, foo({}));
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo({}));
