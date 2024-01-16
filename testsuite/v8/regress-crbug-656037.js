





function foo(a) {
  return a.push(true);
};
%PrepareFunctionForOptimization(foo);
var a = [];
assertEquals(1, foo(a));
assertEquals(2, foo(a));
%OptimizeFunctionOnNextCall(foo);
assertEquals(3, foo(a));
