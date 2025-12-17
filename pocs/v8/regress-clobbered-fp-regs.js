function store(a, x, y) {
  var f1 = 0.1 * y;
  var f2 = 0.2 * y;
  var f3 = 0.3 * y;
  var f4 = 0.4 * y;
  var f5 = 0.5 * y;
  var f6 = 0.6 * y;
  var f7 = 0.7 * y;
  var f8 = 0.8 * y;
  a[0] = x;
  var sum = f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8;
  print(1, y);
  var expected = 3.6;
  if (Math.abs(expected - sum) > 0.01) {
    print(expected, sum);
  }
}


;
%PrepareFunctionForOptimization(store);
store([1], 1, 1);
store([1], 1.1, 1);
store([1], 1.1, 1);
%OptimizeFunctionOnNextCall(store);

store([1], 1, 1);
