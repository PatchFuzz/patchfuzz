function f(string, radix) {
  
  radix = radix == 0 ? radix : radix >> 0;
  if (radix != 2) return NaN;
  return %StringParseInt(string, radix);
};
%PrepareFunctionForOptimization(f);
print(2, -4294967294 >> 0);
print(3, f("11", -4294967294));
print(NaN, f("11", -2147483650));
%OptimizeFunctionOnNextCall(f);
print(3, f("11", -4294967294));
