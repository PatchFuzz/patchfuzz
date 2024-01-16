





function foo(b) {
  return (1 / (b ? 0 : -0)) < 0;
}

%PrepareFunctionForOptimization(foo);
assertEquals(false, foo(true));
assertEquals(true, foo(false));
%OptimizeFunctionOnNextCall(foo);
assertEquals(true, foo(false));
