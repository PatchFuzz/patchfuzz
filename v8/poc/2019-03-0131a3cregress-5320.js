




























function OptimizeTruncatingBinaryOp(func) {
  %PrepareFunctionForOptimization(func);
  func(42, -2);
  func(31, undefined);
  %OptimizeFunctionOnNextCall(func);
  func(-1, 2.1);
  print(func);
}


OptimizeTruncatingBinaryOp(function(a, b) { return a >> b; });

OptimizeTruncatingBinaryOp(function(a, b) { return a >>> b; });

OptimizeTruncatingBinaryOp(function(a, b) { return a << b; });

OptimizeTruncatingBinaryOp(function(a, b) { return a & b; });

OptimizeTruncatingBinaryOp(function(a, b) { return a | b; });

OptimizeTruncatingBinaryOp(function(a, b) { return a ^ b; });
