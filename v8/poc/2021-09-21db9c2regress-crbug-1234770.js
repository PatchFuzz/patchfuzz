





function foo(a) {
  return ((a & 1) == 1) & ((a & 2) == 1);
}

%PrepareFunctionForOptimization(foo);
print(0, foo(1));
%OptimizeFunctionOnNextCall(foo);
print(0, foo(1));
