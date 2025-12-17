function foo(x) {
  var a = new Array(1);
  a[0] = x;
  return a;
};
%PrepareFunctionForOptimization(foo);
print([1], foo(1));
print([1], foo(1));
%OptimizeFunctionOnNextCall(foo);
print([1], foo(1));
Array.prototype.__defineSetter__('0', function() {});
print([undefined], foo(1));
