





var a = [];
Object.freeze(a);
function foo() {
  return a.length;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo());
assertEquals(0, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo());
