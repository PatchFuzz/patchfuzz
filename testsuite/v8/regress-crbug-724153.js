





(function TestParameterLimit() {
  var src = '(function f(a,';
  for (var i = 0; i < 65534 - 2; i++) {
    src += 'b' + i + ',';
  }
  src += 'c) { return a + c })';
  var f = eval(src);
  %PrepareFunctionForOptimization(f);
  assertEquals(NaN, f(1));
  assertEquals(NaN, f(2));
  %OptimizeFunctionOnNextCall(f);
  assertEquals(NaN, f(3));
})();
