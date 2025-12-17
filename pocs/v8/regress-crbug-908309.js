const p = Object.defineProperty(Promise.resolve(), 'then', {
  value() {
    return 0;
  }
});

(function() {
function foo() {
  return p.catch().catch();
};
%PrepareFunctionForOptimization(foo);
print(foo, TypeError);
print(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError);
})();

(function() {
function foo() {
  return p.finally().finally();
};
%PrepareFunctionForOptimization(foo);
print(foo, TypeError);
print(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError);
})();
