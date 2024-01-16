





function foo(a) {
  a++;
  a = Math.max(0, a);
  a++;
  return a;
};
%PrepareFunctionForOptimization(foo);
foo(0);
foo(0);
%OptimizeFunctionOnNextCall(foo);
assertEquals(2147483648, foo(2147483646));
