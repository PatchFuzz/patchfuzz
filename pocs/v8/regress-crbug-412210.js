function f(x) {
  return (x ? "" >> 0 : "") + /a/;
};
%PrepareFunctionForOptimization(f);
;
%OptimizeFunctionOnNextCall(f);
f();
