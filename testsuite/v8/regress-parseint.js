





function f(string, radix) {
  
  radix = radix == 0 ? radix : radix >> 0;
  if (radix != 2) return NaN;
  return %StringParseInt(string, radix);
};
%PrepareFunctionForOptimization(f);
assertEquals(2, -4294967294 >> 0);
assertEquals(3, f("11", -4294967294));
assertEquals(NaN, f("11", -2147483650));
%OptimizeFunctionOnNextCall(f);
assertEquals(3, f("11", -4294967294));
