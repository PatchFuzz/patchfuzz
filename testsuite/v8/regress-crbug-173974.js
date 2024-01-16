




























function f() {
  var count = "";
  count[0]--;
};
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
