





function f() {
  return typeof null === "object";
};
%PrepareFunctionForOptimization(f);
;
%OptimizeFunctionOnNextCall(f);
assertTrue(f());
