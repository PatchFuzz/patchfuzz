





function foo(s) {
  s = s + '0123456789012';
  return s.indexOf('0');
};
%PrepareFunctionForOptimization(foo);
assertEquals(0, foo('0'));
assertEquals(0, foo('0'));
%OptimizeFunctionOnNextCall(foo);
assertEquals(0, foo('0'));
