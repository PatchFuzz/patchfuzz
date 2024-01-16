





(function() {
const m = new Map();
const k = Math.pow(2, 31) - 1;
m.set(k, 1);

function foo(m, k) {
  return m.get(k | 0);
};
%PrepareFunctionForOptimization(foo);
assertEquals(1, foo(m, k));
assertEquals(1, foo(m, k));
%OptimizeFunctionOnNextCall(foo);
assertEquals(1, foo(m, k));
})();
