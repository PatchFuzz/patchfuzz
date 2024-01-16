




























function f(o) {
  for (var i = 1; i < 2; ++i) {
    var y = o.y;
  }
}
f({y: 1.1});
f({y: 1.1});

function g(x) {
  f({z: x});
};
%PrepareFunctionForOptimization(g);
g(1);
g(2);
%OptimizeFunctionOnNextCall(g);
g(1);
