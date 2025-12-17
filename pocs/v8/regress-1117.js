function foo(y) {
  return 0 * y;
};
%PrepareFunctionForOptimization(foo);
print(1 / foo(-42), -Infinity);
print(1 / foo(-42), -Infinity);
%OptimizeFunctionOnNextCall(foo);
print(1 / foo(-42), -Infinity);

function bar(x) {
  return x * 0;
};
%PrepareFunctionForOptimization(bar);
print(Infinity, 1 / bar(5));
print(Infinity, 1 / bar(5));
%OptimizeFunctionOnNextCall(bar);
print(-Infinity, 1 / bar(-5));
