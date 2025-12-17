function foo(x) {
  return NaN ** x;
}

%PrepareFunctionForOptimization(foo);
print(NaN, foo(1));
print(1, foo(0));
print(1, foo(-0));
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo(1));
print(1, foo(0));
print(1, foo(-0));
