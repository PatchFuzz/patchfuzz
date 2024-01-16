





function test() {
  Math.abs(-NaN).toString();
};
%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
