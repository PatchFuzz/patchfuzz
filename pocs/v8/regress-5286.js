(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
print(0, foo(2, 2));
print(0, foo(4, 4));
%OptimizeFunctionOnNextCall(foo);
print(-0, foo(-8, 8));
})();

(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
print(0, foo(1, 1));
print(0, foo(2, 2));
%OptimizeFunctionOnNextCall(foo);
print(-0, foo(-3, 3));
})();

(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
print(0, foo(1, 1));
print(0, foo(2, 2));
%OptimizeFunctionOnNextCall(foo);
print(-0, foo(-2147483648, -1));
})();

(function() {
function foo(x, y) {
  return x % y;
};
%PrepareFunctionForOptimization(foo);
print(0, foo(1, 1));
print(0, foo(2, 2));
%OptimizeFunctionOnNextCall(foo);
print(-0, foo(-2147483648, -2147483648));
})();
