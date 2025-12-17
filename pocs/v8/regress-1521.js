function test(x) {
  try {
    throw new Error();
  } catch (e) {
    var y = {f: 1};
    var f = function() {
      var z = y;
      var g = function() {
        if (y.f === z.f) return x;
      };
      ;
      %PrepareFunctionForOptimization(g);
      %OptimizeFunctionOnNextCall(g);
      return g;
    };
    print(3, f()());
  }
}

test(3);
