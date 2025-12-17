function foo() {
      var a = { x: 2 };
      var confused = 0;
      confused += (a.x < 6);
      confused = (confused-1)
      return confused
}

%PrepareFunctionForOptimization(foo);
print(foo());
print(foo());
%OptimizeFunctionOnNextCall(foo);
print(foo());
