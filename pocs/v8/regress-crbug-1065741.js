function bar() {
  String.prototype.startsWith.apply();
}

%PrepareFunctionForOptimization(bar);
print(bar, TypeError);
print(bar, TypeError);
%OptimizeFunctionOnNextCall(bar);
print(bar, TypeError);
%PrepareFunctionForOptimization(bar);
%OptimizeFunctionOnNextCall(bar);
print(bar, TypeError);
print(bar);
