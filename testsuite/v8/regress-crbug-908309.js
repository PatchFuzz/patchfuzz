





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
assertThrows(foo, TypeError);
assertThrows(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo, TypeError);
})();

(function() {
function foo() {
  return p.finally().finally();
};
%PrepareFunctionForOptimization(foo);
assertThrows(foo, TypeError);
assertThrows(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo, TypeError);
})();
