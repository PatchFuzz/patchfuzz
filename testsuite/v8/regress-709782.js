





var a = [0];
function bar(x) {
  return x;
}
function foo() {
  return a.reduce(bar);
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo());
assertEquals(0, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo());
