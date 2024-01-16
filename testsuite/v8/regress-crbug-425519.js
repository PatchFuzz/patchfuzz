





function load(a, i) {
  return a[i];
};
%PrepareFunctionForOptimization(load);
load([]);
load(0);
load("x", 0);
%OptimizeFunctionOnNextCall(load);
load([], 0);
