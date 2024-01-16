





function h(y) {
  return y.u;
}

function g() {
  return h.apply(0, arguments);
}

function f(x) {
  var o = {u: x};
  return g(o);
};
%PrepareFunctionForOptimization(f);
f(42);
f(0.1);

%OptimizeFunctionOnNextCall(f);

assertEquals(undefined, f(undefined));
