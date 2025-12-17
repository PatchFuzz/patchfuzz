function bar(x) {
  return 1 / (x + x);
}

function foo(n) {
  var y = 2147483648;
  var x = bar(y)
  for (; n > 0; --n) {
    x = bar(y);
    y = -0;
  }
  return x;
}

%PrepareFunctionForOptimization(bar);
%PrepareFunctionForOptimization(foo);
foo(1);
%OptimizeFunctionOnNextCall(foo);
print(-Infinity, foo(2));
