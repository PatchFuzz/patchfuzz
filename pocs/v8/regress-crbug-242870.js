var non_const_true = true;

function f() {
  return non_const_true || true && g();
};
%PrepareFunctionForOptimization(f);
function g() {
  for (;;) {}
}

print(f());
print(f());
%OptimizeFunctionOnNextCall(f);
print(f());
