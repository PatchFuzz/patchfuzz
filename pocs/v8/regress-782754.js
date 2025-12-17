let a = [1, 2];
function f(skip) {
  g(undefined, skip);
};
%PrepareFunctionForOptimization(f);
function g(x, skip) {
  if (skip) return;
  return a[x + 1];
}
g(0, false);
g(0, false);
f(true);
f(true);
%OptimizeFunctionOnNextCall(f);
f(false);
