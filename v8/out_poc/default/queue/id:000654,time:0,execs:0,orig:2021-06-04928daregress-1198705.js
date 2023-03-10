





function bar(x) {
  x = (x|0) * 2**52;
  x = Math.min(Math.max(x, 0), 2**52);
  return (x + x)|0;
}

%PrepareFunctionForOptimization(bar);
print(0, bar(0));
%OptimizeFunctionOnNextCall(bar);

function foo() {
  return bar(1);
}

%PrepareFunctionForOptimization(foo);
print(0, foo());
%OptimizeFunctionOnNextCall(foo);
print(0, foo());
