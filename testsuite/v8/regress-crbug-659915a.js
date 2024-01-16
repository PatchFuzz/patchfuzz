





let x;
function f(a) {
  x += a;
}
function g(a) {
  f(a); return x;
}
function h(a) {
  x = a; return x;
}

function boom() { return g(1) }

%PrepareFunctionForOptimization(boom);
assertEquals(1, h(1));
assertEquals(2, boom());
assertEquals(3, boom());
%OptimizeFunctionOnNextCall(boom);
assertEquals(4, boom());
