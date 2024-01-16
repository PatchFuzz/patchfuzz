





function f(x) {
  x ** 1 === '';
};
%PrepareFunctionForOptimization(f);
f();
f();
f();
%OptimizeFunctionOnNextCall(f);
f();

function g(x) {
  '' === x ** 1;
};
%PrepareFunctionForOptimization(g);
g();
g();
g();
%OptimizeFunctionOnNextCall(g);
g();
