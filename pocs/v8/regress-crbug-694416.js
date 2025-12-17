var good = 23;
var boom = 42;

function foo(name) {
  return this[name];
};
%PrepareFunctionForOptimization(foo);
print(23, foo('good'));
print(23, foo('good'));
%OptimizeFunctionOnNextCall(foo);
print(42, foo('boom'));
