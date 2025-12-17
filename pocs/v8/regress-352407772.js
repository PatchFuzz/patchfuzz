function foo() {
  try {
    new String(Symbol());
  } catch(e) {
    return 42;
  }
}
%PrepareFunctionForOptimization(foo);
print(42, foo());
print(42, foo());
%OptimizeFunctionOnNextCall(foo);
print(42, foo());
