





function f(a, b, c, d, e) {
  if (a && (b, c ? d() : e())) return 0;
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
