































function optimized() {
  return unoptimized.apply(null, arguments);
}
%PrepareFunctionForOptimization(optimized);


function unoptimized() {
  with ({}) {
    return optimized.arguments;
  }
}

for (var i = 0; i < 5; ++i) {
  assertEquals(3, optimized(1, 2, 3).length);
}
%OptimizeFunctionOnNextCall(optimized);
assertEquals(3, optimized(1, 2, 3).length);
