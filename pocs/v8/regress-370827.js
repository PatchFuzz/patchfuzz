function g(dummy, x) {
  var start = "";
  if (x) {
    start = x + ' - ';
  }
  start = start + "array length";
};

function f() {
  gc();
  g([0.1]);
};
%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
f();
