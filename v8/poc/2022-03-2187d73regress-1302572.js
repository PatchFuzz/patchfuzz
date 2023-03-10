





function foo(i) {
  const b = i <= i;
  return 0 + b;
}

%PrepareFunctionForOptimization(foo);
print(1, foo(5));
%OptimizeFunctionOnNextCall(foo);
print(1, foo(5));
