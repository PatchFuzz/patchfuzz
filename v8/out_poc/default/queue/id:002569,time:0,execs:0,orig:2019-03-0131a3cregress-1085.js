






























function f(x) { return 1 / Math.min(1, x); }

%PrepareFunctionForOptimization(f);
for (var i = 0; i < 5; ++i) f(1);
%OptimizeFunctionOnNextCall(f);

print(-Infinity, f(-0));
