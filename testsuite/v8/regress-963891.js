





var bar = true;
bar = false;
function foo() {
  return !bar;
};
%PrepareFunctionForOptimization(foo);
assertEquals(foo(), true);
%OptimizeFunctionOnNextCall(foo);
assertEquals(foo(), true);
