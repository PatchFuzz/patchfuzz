





function foo(x) {
  return NaN ** x;
}

%PrepareFunctionForOptimization(foo);
assertEquals(NaN, foo(1));
assertEquals(1, foo(0));
assertEquals(1, foo(-0));
%OptimizeFunctionOnNextCall(foo);
assertEquals(NaN, foo(1));
assertEquals(1, foo(0));
assertEquals(1, foo(-0));
