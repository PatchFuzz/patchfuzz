




























function f(i) {
  return "abc"[i];
};
%PrepareFunctionForOptimization(f);
f("length");
f("length");
%OptimizeFunctionOnNextCall(f);
f("length");
