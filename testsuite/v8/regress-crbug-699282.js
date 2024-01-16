





var v = 1;
function foo() {
  return Math.floor(-v / 125);
};
%PrepareFunctionForOptimization(foo);
assertEquals(-1, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(-1, foo());
