





(function ShiftLeftWithDeoptUsage() {
  function g() {}

  function f() {
    var tmp = 1264475713;
    var tmp1 = tmp - (-913041544);
    g();
    return 1 << tmp1;
  }

  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  print(512, f());
})();


(function ShiftLeftWithCallUsage() {
  var f = (function() {
    "use asm"
    
    

    function g(x) { return x; }

    function f() {
      var tmp = 1264475713;
      var tmp1 = tmp - (-913041544);
      return g(1 << tmp1, tmp1);
    }

    return f;
  })();

  %PrepareFunctionForOptimization(f);
  %OptimizeFunctionOnNextCall(f);
  print(512, f());
})();
