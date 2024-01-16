





(function() {
function foo(x) {
  return Math.abs(Math.min(+x, 0));
};
%PrepareFunctionForOptimization(foo);
assertEquals(NaN, foo());
assertEquals(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(NaN, foo());
})();

(function() {
function foo(x) {
  return Math.abs(Math.min(-x, 0));
};
%PrepareFunctionForOptimization(foo);
assertEquals(NaN, foo());
assertEquals(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(NaN, foo());
})();

(function() {
function foo(x) {
  return Math.abs(Math.max(0, +x));
};
%PrepareFunctionForOptimization(foo);
assertEquals(NaN, foo());
assertEquals(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(NaN, foo());
})();

(function() {
function foo(x) {
  return Math.abs(Math.max(0, -x));
};
%PrepareFunctionForOptimization(foo);
assertEquals(NaN, foo());
assertEquals(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(NaN, foo());
})();
