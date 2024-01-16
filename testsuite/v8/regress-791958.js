





obj = {
  m: print
};
function foo() {
  for (var x = -536870912; x != -536870903; ++x) {
    obj.m(-x >= 1000000 ? x % 1000000 : y);
  }
};
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
