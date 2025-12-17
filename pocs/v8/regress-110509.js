function foo() {
  Math.random();
  new Function("");
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
