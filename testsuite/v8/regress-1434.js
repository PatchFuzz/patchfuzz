




























function compare(a, b) {
  return a === b;
};
%PrepareFunctionForOptimization(compare);
compare(1.5, 2.5);
%OptimizeFunctionOnNextCall(compare);
assertTrue(compare(undefined, undefined));
