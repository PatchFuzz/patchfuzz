function foo() {
  return bar();
}

function bar(a, b) {
  return a + b;
}

%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
%PrepareFunctionForOptimization(bar);
%OptimizeFunctionOnNextCall(bar);
bar(2n, 2n);
print(Number.isNaN(foo()));
