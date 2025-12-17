function foo(x) {
  var a = x + 1;
  var b = x + 2;
  if (x != 0) {
    if (x > 0 & x < 100) {
      return a;
    }
  }
  return 0;
};
%PrepareFunctionForOptimization(foo);
print(0, foo(0));
print(0, foo(0));
%OptimizeFunctionOnNextCall(foo);
print(3, foo(2));
