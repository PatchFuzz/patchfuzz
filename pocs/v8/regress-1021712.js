function f() {
  Promise.prototype.then.call()
}


%PrepareFunctionForOptimization(f);
try {
  f();
} catch (e) {}
%OptimizeFunctionOnNextCall(f);
print(() => f(), TypeError);
