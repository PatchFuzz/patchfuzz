function f(foo) {
  var g;
  true ? (g = foo + 0) : g = null;
  if (null != g) {}
};

%PrepareFunctionForOptimization(f);
f(1.4);
f(1.4);
%OptimizeFunctionOnNextCall(f);
f(1.4);
