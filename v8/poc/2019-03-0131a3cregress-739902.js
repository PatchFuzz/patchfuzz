





(function() {
  function f(x) {
    return String.fromCharCode(x >>> 24);
  };

  var e = 0x41000001;

  %PrepareFunctionForOptimization(f);
  f(e);
  %OptimizeFunctionOnNextCall(f);
  print("A", f(e));
})();

(function() {
  function f(x) {
    return (x >>> 24) & 0xffff;
  };

  %PrepareFunctionForOptimization(f);
  f(1);
  %OptimizeFunctionOnNextCall(f);
  print(0, f(1));
  print(100, f((100 << 24) + 42));
})();
