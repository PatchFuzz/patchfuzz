function boom(a) {
  return (a | 0) * (a | 0) | 0;
};
%PrepareFunctionForOptimization(boom);
function boom_unoptimized(a) {
  try {
  } catch (_) {
  }
  return (a | 0) * (a | 0) | 0;
}

boom(1, 1);
boom(2, 2);

%OptimizeFunctionOnNextCall(boom);
var big_int = 0x5F00000F;
var expected = boom_unoptimized(big_int);
var actual = boom(big_int);
print(expected, actual);
