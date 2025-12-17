var f = (function() {
  var max = Math.max;
  return function f() { return max(0, -1); };
})();
%PrepareFunctionForOptimization(f);

print(0, f());
%OptimizeFunctionOnNextCall(f);
print(0, f());
