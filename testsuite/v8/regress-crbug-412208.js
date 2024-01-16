





var non_const_true = true;

function f() {
  return non_const_true || (f() = this);
}

%PrepareFunctionForOptimization(f);
assertTrue(f());
assertTrue(f());
%OptimizeFunctionOnNextCall(f);
assertTrue(f());
