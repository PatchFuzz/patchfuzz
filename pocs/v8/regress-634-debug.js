function f() {
  %SetAllocationTimeout(1, 0, false);
  a = new Array(0);
  print(0, a.length);
  print(0, a.length);
  %SetAllocationTimeout(-1, -1, true);
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
