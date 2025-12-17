function f(x) {
  Math.log(Math.min(0.1, Math.abs(x)));
};
%PrepareFunctionForOptimization(f);
f(0.1);
f(0.1);
%OptimizeFunctionOnNextCall(f);
f(0.1);
