function test(x) {
  let y = -9007199254740990;
  y++;
  return (0 + x) ** y;
}

const x = -1.0219695401608718e+308;
%PrepareFunctionForOptimization(test);
print(-0, test(x));
print(-0, test(x));
%OptimizeFunctionOnNextCall(test);
print(-0, test(x));
