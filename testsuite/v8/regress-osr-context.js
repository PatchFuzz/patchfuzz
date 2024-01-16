






(function() {
  "use strict";
  var a = 23;
  function f() {
    for (let i = 0; i < 5; ++i) {
      a--;  
      function g() { return i }  
      if (i == 2) %OptimizeOsr();
    }
    return a;
  }
  %PrepareFunctionForOptimization(f);
  assertEquals(18, f());
})();
