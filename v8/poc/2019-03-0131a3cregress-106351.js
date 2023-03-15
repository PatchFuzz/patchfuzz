





























function test(x) {
  var v = Math.round(x) - x;
  print(0.5, v);
}

%PrepareFunctionForOptimization(test);
for (var i = 0; i < 5; ++i) test(0.5);
%OptimizeFunctionOnNextCall(test);
test(0.5);
