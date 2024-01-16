





function g(a) {
  if (a) return arguments;
  %DeoptimizeNow();
  return 23;
}
function f() {
  return g(false);
};
%PrepareFunctionForOptimization(f);
assertEquals(23, f());
assertEquals(23, f());
%OptimizeFunctionOnNextCall(f);
assertEquals(23, f());
