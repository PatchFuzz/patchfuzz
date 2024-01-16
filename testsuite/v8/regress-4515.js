





function f(array) {
  return array.length >>> 0;
};
%PrepareFunctionForOptimization(f);
var a = new Array();
a[4000000000] = "A";

assertEquals(4000000001, f(a));
assertEquals(4000000001, f(a));
%OptimizeFunctionOnNextCall(f);
assertEquals(4000000001, f(a));
