




























function foo(x) {
  var a = [1, 2, 3, 4, 5, 6, 7, 8];
  a[x + 5];
  var result;
  for (var i = 0; i < 3; i++) {
    result = a[0 - x];
  }
  return result;
}
%PrepareFunctionForOptimization(foo);

%PrepareFunctionForOptimization(foo);
foo(0);
foo(0);
%OptimizeFunctionOnNextCall(foo);
var r = foo(-2);
assertEquals(3, r);
