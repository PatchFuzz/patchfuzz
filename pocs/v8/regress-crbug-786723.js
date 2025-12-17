function f() {
  var o = {};
  function g() {
    o.x = 1;
    return Object.create(o);
  };
  %PrepareFunctionForOptimization(g);
  ;
  gc();
  o.x = 10;
  %OptimizeFunctionOnNextCall(g);
  g();
}
f();
f();
