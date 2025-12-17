function foo(x) {
  var s = Math.floor(x / 3600);
  Math.floor(s);
  return s % 24;
};
%PrepareFunctionForOptimization(foo);
foo(12345678);
foo(12345678);
%OptimizeFunctionOnNextCall(foo);
foo(12345678);
