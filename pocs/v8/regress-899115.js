function foo() {
  Object.getPrototypeOf([]).includes();
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
