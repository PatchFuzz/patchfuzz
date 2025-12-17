function c(x) {
  undefined.boom();
}

function f() {
  return new c();
}

function g() {
  f();
};
%PrepareFunctionForOptimization(g);
print("g()", TypeError);
print("g()", TypeError);
%OptimizeFunctionOnNextCall(g);
print("g()", TypeError);
