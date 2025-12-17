function foo(x) {
  return (x ? true : "7") >> 0;
};
%PrepareFunctionForOptimization(foo);
print(1, foo(1));
print(1, foo(1));
%OptimizeFunctionOnNextCall(foo);
print(7, foo(0));
