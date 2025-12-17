function foo(b) {
  return (1 / (b ? 0 : -0)) < 0;
}

%PrepareFunctionForOptimization(foo);
print(false, foo(true));
print(true, foo(false));
%OptimizeFunctionOnNextCall(foo);
print(true, foo(false));
