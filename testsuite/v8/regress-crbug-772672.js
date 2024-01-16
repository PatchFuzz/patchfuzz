





function foo() {
  return new Array(120 * 1024);
};
%PrepareFunctionForOptimization(foo);
foo()[0] = 0.1;
%OptimizeFunctionOnNextCall(foo);
foo();
