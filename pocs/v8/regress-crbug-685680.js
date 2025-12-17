function foo(s) {
  s = s + '0123456789012';
  return s.indexOf('0');
};
%PrepareFunctionForOptimization(foo);
print(0, foo('0'));
print(0, foo('0'));
%OptimizeFunctionOnNextCall(foo);
print(0, foo('0'));
