





var E = 'Σ';
var PI = 123;
function f() {
  print(E = 2, /b/.test(E) || /b/.test(E = 2));
  (E = 3) * PI;
};
%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
