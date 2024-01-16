





(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo(2, 2));
assertEquals(0, foo(4, 4));
%OptimizeFunctionOnNextCall(foo);
assertEquals(-0, foo(-8, 8));
})();

(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo(1, 1));
assertEquals(0, foo(2, 2));
%OptimizeFunctionOnNextCall(foo);
assertEquals(-0, foo(-3, 3));
})();

(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo(1, 1));
assertEquals(0, foo(2, 2));
%OptimizeFunctionOnNextCall(foo);
assertEquals(-0, foo(-2147483648, -1));
})();

(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo(1, 1));
assertEquals(0, foo(2, 2));
%OptimizeFunctionOnNextCall(foo);
assertEquals(-0, foo(-2147483648, -2147483648));
})();
