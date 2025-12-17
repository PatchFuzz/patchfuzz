var bar = true;
bar = false;
function foo() {
  return !bar;
};
%PrepareFunctionForOptimization(foo);
print(foo(), true);
%OptimizeFunctionOnNextCall(foo);
print(foo(), true);
