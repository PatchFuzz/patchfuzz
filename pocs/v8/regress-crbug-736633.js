function f(x) {
  switch (x | 0) {
    case 0:
    case 1:
    case 2:
    case -2147483644:
    case 2147483647:
      return x + 1;
  }

  return 0;
};
%PrepareFunctionForOptimization(f);
print(1, f(0));
print(2, f(1));
%OptimizeFunctionOnNextCall(f);
print(3, f(2));
