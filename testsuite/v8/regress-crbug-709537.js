





function foo() {
  return { 0: {}, x: {} };
};
%PrepareFunctionForOptimization(foo);
var ref = foo();
assertEquals(ref, foo());
assertEquals(ref, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(ref, foo());
