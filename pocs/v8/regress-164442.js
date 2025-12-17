function ensureNotNegative(x) {
  return Math.max(0, x | 0);
};
%PrepareFunctionForOptimization(ensureNotNegative);

ensureNotNegative(1);
ensureNotNegative(2);

%OptimizeFunctionOnNextCall(ensureNotNegative);

var r = ensureNotNegative(-1);

print(0, r);
