(function() {
function foo() {
  const x = 1e-1;
  return Object.is(-0, x * -1e-308);
};
%PrepareFunctionForOptimization(foo);
print(foo());
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
})();

(function() {
function foo(x) {
  return Object.is(-0, x * -1e-308);
};
%PrepareFunctionForOptimization(foo);
print(foo(1e-1));
print(foo(1e-1));
%OptimizeFunctionOnNextCall(foo);
print(foo(1e-1));
})();

(function() {
function foo(x) {
  return Object.is(-0, x);
};
%PrepareFunctionForOptimization(foo);
print(foo(1e-1 * -1e-308));
print(foo(1e-1 * -1e-308));
%OptimizeFunctionOnNextCall(foo);
print(foo(1e-1 * -1e-308));
})();
