































function foo() {
  return Math.sqrt(2.6415) ? 88 : 99;
}

%PrepareFunctionForOptimization(foo);
print(88, foo());
print(88, foo());
%OptimizeFunctionOnNextCall(foo)
print(88, foo());
