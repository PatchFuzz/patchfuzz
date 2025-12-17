function foo() {
  return [+0, false].indexOf(-(4 / 3));
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
