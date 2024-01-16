




























function boom(x) {
  switch (x) {
    case 1:
      return 'one';
    case 1500000000:
      return 'non-smi int32';
    default:
      return 'default';
  }
};
%PrepareFunctionForOptimization(boom);
assertEquals("one", boom(1));
assertEquals("one", boom(1));
%OptimizeFunctionOnNextCall(boom);
assertEquals("non-smi int32", boom(1500000000));
