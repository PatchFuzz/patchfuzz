var non_const_true = true;

function f() {
  return non_const_true || (f() = this);
}

%PrepareFunctionForOptimization(f);
print(f());
print(f());
%OptimizeFunctionOnNextCall(f);
print(f());
