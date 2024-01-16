





function foo(a) {
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    sum += a[i];

    if (i > 6) {
      sum -= a[i - 4];
      sum -= a[i - 5];
    }
  }
  return sum;
}
%PrepareFunctionForOptimization(foo);

var a = new Int32Array(10);

%PrepareFunctionForOptimization(foo);
foo(a);
foo(a);
%OptimizeFunctionOnNextCall(foo);
foo(a);
%PrepareFunctionForOptimization(foo);
%OptimizeFunctionOnNextCall(foo);
foo(a);
assertOptimized(foo);
