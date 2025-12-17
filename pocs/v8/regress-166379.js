function mod(a, b) {
  return a % b;
}


;
%PrepareFunctionForOptimization(mod);
print(0, mod(4, 2));
print(1, mod(3, 2));
%OptimizeFunctionOnNextCall(mod);


print(-Infinity, 1 / mod(-2147483648, -1));
