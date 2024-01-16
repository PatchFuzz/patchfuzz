






var f = (function() {
  var max = Math.max;
  return function f() { return max(0, -1); };
})();
%PrepareFunctionForOptimization(f);

assertEquals(0, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(0, f());
