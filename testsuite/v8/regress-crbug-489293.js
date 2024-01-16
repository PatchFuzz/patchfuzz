






function f() {
  var x = 0;
  for (var y = 0; y < 0; ++y) {
    x = x + y | 0;
  }
  return unbound;
};
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
assertThrows(f, ReferenceError);
