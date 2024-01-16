





function dummy(x) {};

function g() {
  return g.arguments;
}

function f(limit) {
  var i = 0;
  var o = {};
  for (; i < limit; i++) {
    o.y = +o.y;
    g();
  }
};
%PrepareFunctionForOptimization(f);
f(1);
f(1);
%OptimizeFunctionOnNextCall(f);
dummy(f(1));
dummy(f(2));
