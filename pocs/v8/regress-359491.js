(function () {
  function f(a, b, mode) {
    if (mode) {
      return a === b;
    } else {
      return a === b;
    }
  }

  
  f("a", "b", 1);
  f("c", "d", 1);
  f("a", "b", 0);
  f("c", "d", 0);

  function g(mode) {
    var x = 1e10 | 0;
    f(x, x, mode);
  }

  
  ;
  %PrepareFunctionForOptimization(g);
  g(1);
  g(1);
  %OptimizeFunctionOnNextCall(g);
  
  g(0);
})();

(function () {
  function f(a, b, mode) {
    if (mode) {
      return a === b;
    } else {
      return a === b;
    }
  }

  
  f({a: 1}, {b: 1}, 1);
  f({c: 1}, {d: 1}, 1);
  f({a: 1}, {c: 1}, 0);
  f({b: 1}, {d: 1}, 0);

  function g(mode) {
    var x = 1e10 | 0;
    f(x, x, mode);
  }

  
  ;
  %PrepareFunctionForOptimization(g);
  g(1);
  g(1);
  %OptimizeFunctionOnNextCall(g);
  
  g(0);
})();
