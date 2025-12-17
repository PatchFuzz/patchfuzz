(function TestParameterLimit() {
  var src = '(function f(a,';
  for (var i = 0; i < 65525 - 2; i++) {
    src += 'b' + i + ',';
  }
  src += 'c) { return a + c })';
  var f = eval(src);
  %PrepareFunctionForOptimization(f);
  print(NaN, f(1));
  print(NaN, f(2));
  %OptimizeFunctionOnNextCall(f);
  print(NaN, f(3));
})();
