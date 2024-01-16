






























function withCommaExpressionInConditional(x) {
  if (x > 1000) { for (var i = 0; i < 10000; i++) { } }
  var y;
  if (y = x, y > 1) {
    return 'big';
  }
  return (y = x + 1, y > 1) ? 'medium' : 'small';
}
%PrepareFunctionForOptimization(withCommaExpressionInConditional);

%PrepareFunctionForOptimization(withCommaExpressionInConditional);
for (var i = 0; i < 5; i++) {
  withCommaExpressionInConditional(i);
}
%OptimizeFunctionOnNextCall(withCommaExpressionInConditional);
withCommaExpressionInConditional(i);
withCommaExpressionInConditional("1")
