function h(y) {
  print(42, y.u);
}
function g() {
  h.apply(0, arguments);
}
function f(x) {
  g({u: x});
};
%PrepareFunctionForOptimization(f);
f(42);
f(42);
%OptimizeFunctionOnNextCall(f);
f(42);
