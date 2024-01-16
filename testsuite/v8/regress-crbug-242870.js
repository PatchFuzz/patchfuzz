




























var non_const_true = true;

function f() {
  return non_const_true || true && g();
};
%PrepareFunctionForOptimization(f);
function g() {
  for (;;) {}
}

assertTrue(f());
assertTrue(f());
%OptimizeFunctionOnNextCall(f);
assertTrue(f());
