





function foo(x) {
  var a = new Array(1);
  a[0] = x;
  return a;
};
%PrepareFunctionForOptimization(foo);
assertEquals([1], foo(1));
assertEquals([1], foo(1));
%OptimizeFunctionOnNextCall(foo);
assertEquals([1], foo(1));
Array.prototype.__defineSetter__('0', function() {});
assertEquals([undefined], foo(1));
