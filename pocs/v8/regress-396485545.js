function foo(a) {
  a += 1;
  a += 1;
  return a;
}

%PrepareFunctionForOptimization(foo);
print(1073741825, foo(1073741823));
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
