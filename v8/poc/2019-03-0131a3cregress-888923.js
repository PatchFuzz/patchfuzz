





(function() {
  function f(o) {
    o.x;
    Object.create(o);
    return o.y.a;
  }

  %PrepareFunctionForOptimization(f);
  f({ x : 0, y : { a : 1 } });
  f({ x : 0, y : { a : 2 } });
  %OptimizeFunctionOnNextCall(f);
  print(3, f({ x : 0, y : { a : 3 } }));
})();

(function() {
  function f(o) {
    let a = o.y;
    Object.create(o);
    return o.x + a;
  }

  %PrepareFunctionForOptimization(f);
  f({ x : 42, y : 21 });
  f({ x : 42, y : 21 });
  %OptimizeFunctionOnNextCall(f);
  print(63, f({ x : 42, y : 21 }));
})();
