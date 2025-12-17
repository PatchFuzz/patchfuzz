function foo(x) {
  x = Math.clz32(x);
  return "a".indexOf("a", x);
};
%PrepareFunctionForOptimization(foo);
foo(1);
foo(1);
%OptimizeFunctionOnNextCall(foo);
foo();
