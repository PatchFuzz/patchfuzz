






























function foo() { return 1; }

function f(x, y) {
  var a = [0];
  if (x == 0) {
    %DeoptimizeFunction(f);
    return 1;
  }
  a[0] = %Call(f, null, x - 1);
  return x >> a[0];
}

%PrepareFunctionForOptimization(f);
f(42);
f(42);
print(42, f(42));
%OptimizeFunctionOnNextCall(f);
print(42, f(42));
