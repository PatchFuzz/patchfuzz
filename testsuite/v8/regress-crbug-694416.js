





var good = 23;
var boom = 42;

function foo(name) {
  return this[name];
};
%PrepareFunctionForOptimization(foo);
assertEquals(23, foo('good'));
assertEquals(23, foo('good'));
%OptimizeFunctionOnNextCall(foo);
assertEquals(42, foo('boom'));
