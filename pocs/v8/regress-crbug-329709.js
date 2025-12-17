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
print("one", boom(1));
print("one", boom(1));
%OptimizeFunctionOnNextCall(boom);
print("non-smi int32", boom(1500000000));
