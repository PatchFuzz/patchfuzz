





function f(x) {
  let c = x | -6;
  switch (c) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case -5: return 3;
  }
  return 0;
}

%PrepareFunctionForOptimization(f);
print(0, f(-2147483648));
print(3, f(-2127484783));
%OptimizeMaglevOnNextCall(f);
print(0, f(-2147483648));
print(3, f(-2127484783));
