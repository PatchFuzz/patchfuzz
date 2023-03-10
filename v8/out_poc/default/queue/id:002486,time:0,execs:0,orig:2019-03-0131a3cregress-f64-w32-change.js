





var f = (function () {
  "use asm";
  var f64use = 0;
  function f(x, b) {
    x = x|0;
    b = b >>> 0;
    var f64 = x ? -1 : b;
    f64use = f64 + 0.5;
    var w32 = x ? 1 : f64;
    return (w32 + 1)|0;
  }

  return f;
})();

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(0, f(0, -1));
