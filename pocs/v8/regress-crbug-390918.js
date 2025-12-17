function f(scale) {
  var arr = {a: 1.1};

  for (var i = 0; i < 2; i++) {
    arr[2 * scale] = 0;
  }
};
%PrepareFunctionForOptimization(f);
f({});
f({});
%OptimizeFunctionOnNextCall(f);
f(1004);
