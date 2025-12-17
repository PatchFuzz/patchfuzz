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
print(1, h(1));
print(2, boom());
print(3, boom());
%OptimizeFunctionOnNextCall(boom);
print(4, boom());
