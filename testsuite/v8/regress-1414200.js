





function test() {
  for (var i = 0; i< 10; i++) {
    if (i <= NaN) {
      throw 0;
    }
  }
}

%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
