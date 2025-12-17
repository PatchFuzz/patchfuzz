function g(a) {
  if (a) return arguments;
  %DeoptimizeNow();
  return 23;
}
function f() {
  return g(false);
};
%PrepareFunctionForOptimization(f);
print(23, f());
print(23, f());
%OptimizeFunctionOnNextCall(f);
print(23, f());
