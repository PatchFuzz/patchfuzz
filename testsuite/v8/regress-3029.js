




























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
assertThrows("g()", TypeError);
assertThrows("g()", TypeError);
%OptimizeFunctionOnNextCall(g);
assertThrows("g()", TypeError);
