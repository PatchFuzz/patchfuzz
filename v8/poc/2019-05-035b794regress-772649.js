





async function* gen([[notIterable]] = [null]) {}
%PrepareFunctionForOptimization(gen);
print(() => gen(), TypeError);
print(() => gen(), TypeError);
%OptimizeFunctionOnNextCall(gen);
print(() => gen(), TypeError);
