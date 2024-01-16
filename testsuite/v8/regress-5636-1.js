





function f(n) {
  var a = [];
  function g() {
    return x;
  };
  for (var i = 0; i < n; ++i) {
    var x = i;
    a[i] = g;
    %PrepareFunctionForOptimization(g);
    %OptimizeFunctionOnNextCall(g);
    g();
  }
  return a;
}
var a = f(3);
assertEquals(3, a.length);
assertEquals(2, a[0]());
assertEquals(2, a[1]());
assertEquals(2, a[2]());
