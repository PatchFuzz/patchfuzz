





Object.prototype[1] = 1;
function foo(baz) {
  return 1 in arguments;
}
assertTrue(foo(0));
%PrepareFunctionForOptimization(foo);
assertTrue(foo(0));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(0));
