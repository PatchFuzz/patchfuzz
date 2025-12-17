var arr = [];
function foo() {
  arr[0] = undefined;
}
%PrepareFunctionForOptimization(foo);
print(foo(), undefined);
%OptimizeFunctionOnNextCall(foo);
print(foo(), undefined);
