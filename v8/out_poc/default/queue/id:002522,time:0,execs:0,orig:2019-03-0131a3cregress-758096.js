





(function() {
  var x = 1;
  x.__proto__.f = function() { return 1; }

  function g() {}
  g.prototype.f =  function() { return 3; };
  var y = new g();

  function f(obj) {
    return obj.f();
  }

  %PrepareFunctionForOptimization(f);
  f(x);
  f(y);
  f(x);
  f(y);
  %OptimizeFunctionOnNextCall(f);
  print(1, f(x));
  print(3, f(y));
})();

(function() {
  function f() { return 1; }
  function g() { return 2; }

  var global;

  function h(s) {
    var fg;
    var a = 0;
    if (s) {
      global = 0;
      a = 1;
      fg = f;
    } else {
      global = 1
      fg = g;
    }
    return fg() + a;
  }

  %PrepareFunctionForOptimization(h);
  h(0);
  h(0);
  h(1);
  h(1);
  %OptimizeFunctionOnNextCall(h);
  print(2, h(0));
})();
