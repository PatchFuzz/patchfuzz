































function foo(y) {
  return 0 * y;
};
%PrepareFunctionForOptimization(foo);
assertEquals(1 / foo(-42), -Infinity);
assertEquals(1 / foo(-42), -Infinity);
%OptimizeFunctionOnNextCall(foo);
assertEquals(1 / foo(-42), -Infinity);

function bar(x) {
  return x * 0;
};
%PrepareFunctionForOptimization(bar);
assertEquals(Infinity, 1 / bar(5));
assertEquals(Infinity, 1 / bar(5));
%OptimizeFunctionOnNextCall(bar);
assertEquals(-Infinity, 1 / bar(-5));
