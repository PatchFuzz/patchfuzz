function bar(len) {
  return new Array(len);
};
%PrepareFunctionForOptimization(bar);
bar(0);
%OptimizeFunctionOnNextCall(bar);
bar(0);
