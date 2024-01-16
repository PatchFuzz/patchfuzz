





function test(x) {
  [x, , ];
};
%PrepareFunctionForOptimization(test);
test(0);
test(0);
%OptimizeFunctionOnNextCall(test);
test(0);
