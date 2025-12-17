const x = (-1).toLocaleString().padEnd(2 + 31 - 1, 'aa');

function test() {
  try {
    y = x;
  } catch (e) {
  }
  return y > -Infinity ? y : 0 - y;
}

%PrepareFunctionForOptimization(test);
print(NaN, test());
%OptimizeFunctionOnNextCall(test);
print(NaN, test());
