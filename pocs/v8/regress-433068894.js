function foo(param) {
  let val1 = 0x7fffffff
  var val2 = param & -5e-324;
  val1 += param;
  return val1 & 0x7fffffff | val2;
}
%PrepareFunctionForOptimization(foo);
foo(1);
%OptimizeFunctionOnNextCall(foo);
print(2147483645, foo(-1.9));
