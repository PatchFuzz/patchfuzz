





(function() {
function foo() {
  return Infinity / Math.max(-0, +0);
};
%PrepareFunctionForOptimization(foo);
assertEquals(+Infinity, foo());
assertEquals(+Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(+Infinity, foo());
})();

(function() {
function foo() {
  return Infinity / Math.max(+0, -0);
};
%PrepareFunctionForOptimization(foo);
assertEquals(+Infinity, foo());
assertEquals(+Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(+Infinity, foo());
})();

(function() {
function foo() {
  return Infinity / Math.min(-0, +0);
};
%PrepareFunctionForOptimization(foo);
assertEquals(-Infinity, foo());
assertEquals(-Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(-Infinity, foo());
})();

(function() {
function foo() {
  return Infinity / Math.min(+0, -0);
};
%PrepareFunctionForOptimization(foo);
assertEquals(-Infinity, foo());
assertEquals(-Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
assertEquals(-Infinity, foo());
})();
