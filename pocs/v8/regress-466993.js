var test = function() {
  var a = {'1': false, '2': false, '3': false, '4': false};
  print(false, a[1]);
  a[1] = true;
};
;
%PrepareFunctionForOptimization(test);
test();
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
test();
test();
