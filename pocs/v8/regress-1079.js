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
  print(3, optimized(1, 2, 3).length);
}
%OptimizeFunctionOnNextCall(optimized);
print(3, optimized(1, 2, 3).length);
