(function() {
function foo() {
  return Infinity / Math.max(-0, +0);
};
%PrepareFunctionForOptimization(foo);
print(+Infinity, foo());
print(+Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
print(+Infinity, foo());
})();

(function() {
function foo() {
  return Infinity / Math.max(+0, -0);
};
%PrepareFunctionForOptimization(foo);
print(+Infinity, foo());
print(+Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
print(+Infinity, foo());
})();

(function() {
function foo() {
  return Infinity / Math.min(-0, +0);
};
%PrepareFunctionForOptimization(foo);
print(-Infinity, foo());
print(-Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
print(-Infinity, foo());
})();

(function() {
function foo() {
  return Infinity / Math.min(+0, -0);
};
%PrepareFunctionForOptimization(foo);
print(-Infinity, foo());
print(-Infinity, foo());
%OptimizeFunctionOnNextCall(foo);
print(-Infinity, foo());
})();
