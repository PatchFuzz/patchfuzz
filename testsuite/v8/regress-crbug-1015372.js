





(function() {
  function opt(flag) {
    function inline() {
      (function () {
        flag()
      })();
      (flag) = 1;
    }
    inline();
  }
  assertThrows(opt, TypeError);
})();

(function() {
  function opt(flag){
      function inline() {
          var f = (function() {
              return flag;
          });
          function g(x) {
            (flag) = x;
          }

          return [f,g];
      }
      return inline();
  }
  [f, g] = opt(1);

  %PrepareFunctionForOptimization(f);
  assertEquals(1, f());
  assertEquals(1, f());
  %OptimizeFunctionOnNextCall(f);
  assertEquals(1, f());

  g(2);

  assertEquals(2, f());
})();
