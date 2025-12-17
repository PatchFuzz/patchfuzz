function f() {
  return typeof null === "object";
};
%PrepareFunctionForOptimization(f);
;
%OptimizeFunctionOnNextCall(f);
print(f());
