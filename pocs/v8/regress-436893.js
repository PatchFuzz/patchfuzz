var x = 11;
function foo() {
  return 42;
}

function g() { return foo.apply(null, x()++); }
%PrepareFunctionForOptimization(g);
%OptimizeFunctionOnNextCall(g);
print(g);
