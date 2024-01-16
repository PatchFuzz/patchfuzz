





v = { symbol: Symbol() };
function f() {
  for (var i = 0; i < 1; ++i) {
    try { v.symbol(); } catch (e) {}
  }
}

%PrepareFunctionForOptimization(f);
f();
%OptimizeFunctionOnNextCall(f);
f();
