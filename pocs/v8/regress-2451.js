function f() {
  print(-1.0, Math.round(-1.5));
  print(-2.0, Math.round(-2.5));
  print(-1.0, Math.round(-0.5000000000000001));
}

%PrepareFunctionForOptimization(f);
f();
f();
%OptimizeFunctionOnNextCall(f);
f();
print(f);
