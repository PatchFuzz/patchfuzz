





function foo() {
  return [...[, -Infinity]];
};
%PrepareFunctionForOptimization(foo);
foo()[0];
foo()[0];
%OptimizeFunctionOnNextCall(foo);
foo()[0];
