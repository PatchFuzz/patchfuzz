for (i in [0, 0]) {
}
function foo() {
  i = 0;
  return i < 0;
};
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo();
