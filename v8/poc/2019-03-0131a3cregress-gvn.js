






























function test(a) {
  var res = a[0] + a[0];
  if (res == 0) {
    a[0] = 1;
  }
  return a[0];
}

%PrepareFunctionForOptimization(test);

var a = new Array();

var n = 100;

var result = 0;
for (var i = 0; i < n; ++i) {
  if (i == 10) %OptimizeFunctionOnNextCall(test);
  a[0] = 0;
  result += test(a);
}


print(n, result);
