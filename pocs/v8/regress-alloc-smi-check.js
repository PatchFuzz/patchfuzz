var x = {};

function f(a) {
  a[200000000] = x;
};
%PrepareFunctionForOptimization(f);
f(new Array(100000));
f([]);
%OptimizeFunctionOnNextCall(f);
f([]);
