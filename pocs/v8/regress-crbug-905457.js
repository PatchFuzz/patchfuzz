(function() {
function foo(x) {
  return Math.abs(Math.min(+x, 0));
};
%PrepareFunctionForOptimization(foo);
print(NaN, foo());
print(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
})();

(function() {
function foo(x) {
  return Math.abs(Math.min(-x, 0));
};
%PrepareFunctionForOptimization(foo);
print(NaN, foo());
print(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
})();

(function() {
function foo(x) {
  return Math.abs(Math.max(0, +x));
};
%PrepareFunctionForOptimization(foo);
print(NaN, foo());
print(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
})();

(function() {
function foo(x) {
  return Math.abs(Math.max(0, -x));
};
%PrepareFunctionForOptimization(foo);
print(NaN, foo());
print(NaN, foo());
%OptimizeFunctionOnNextCall(foo);
print(NaN, foo());
})();
