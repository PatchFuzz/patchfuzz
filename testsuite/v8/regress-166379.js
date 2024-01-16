




























function mod(a, b) {
  return a % b;
}


;
%PrepareFunctionForOptimization(mod);
assertEquals(0, mod(4, 2));
assertEquals(1, mod(3, 2));
%OptimizeFunctionOnNextCall(mod);


assertEquals(-Infinity, 1 / mod(-2147483648, -1));
