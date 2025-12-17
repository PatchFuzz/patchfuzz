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
  print(opt, TypeError);
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
  print(1, f());
  print(1, f());
  %OptimizeFunctionOnNextCall(f);
  print(1, f());

  g(2);

  print(2, f());
})();
