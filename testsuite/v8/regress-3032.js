




























function f() {
  for (var i = 0; i < 10; i++) { if (i == 5) %OptimizeOsr(); }
  var xl = 4096;
  var z = i % xl;
}
%PrepareFunctionForOptimization(f);
f();
