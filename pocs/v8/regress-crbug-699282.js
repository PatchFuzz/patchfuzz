var v = 1;
function foo() {
  return Math.floor(-v / 125);
};
%PrepareFunctionForOptimization(foo);
print(-1, foo());
%OptimizeFunctionOnNextCall(foo);
print(-1, foo());
