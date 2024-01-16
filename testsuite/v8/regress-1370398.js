





function f() {
  let [x] = [1n];
  y = x;
  x = 1n - y;
  x = 1n - y;
  y = x;
}

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
