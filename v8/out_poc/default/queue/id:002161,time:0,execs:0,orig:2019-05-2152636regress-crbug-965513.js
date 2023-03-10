




%EnsureFeedbackVectorForFunction(foo);
function foo(x) {
  return x * (x == 1);
};
%PrepareFunctionForOptimization(foo);
foo(0.5);
foo(1.5);
%OptimizeFunctionOnNextCall(foo);
foo(1.5);
print(foo);
