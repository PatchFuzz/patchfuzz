function foo() {
  var c = 0;
  for (var e = 0; e < 1; ++e) {
    for (var a = 1; a > 0; a--) {
      c += 1;
    }
    for (var b = 1; b > 0; b--) {
      %OptimizeOsr();
    }
  }
  return c;
}
%PrepareFunctionForOptimization(foo);

try {
  foo();
} catch (e) {
}
