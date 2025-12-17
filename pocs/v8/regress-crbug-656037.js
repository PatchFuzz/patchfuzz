function foo(a) {
  return a.push(true);
};
%PrepareFunctionForOptimization(foo);
var a = [];
print(1, foo(a));
print(2, foo(a));
%OptimizeFunctionOnNextCall(foo);
print(3, foo(a));
