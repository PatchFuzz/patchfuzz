





function bar() {
  String.prototype.startsWith.apply();
}

%PrepareFunctionForOptimization(bar);
assertThrows(bar, TypeError);
assertThrows(bar, TypeError);
%OptimizeFunctionOnNextCall(bar);
assertThrows(bar, TypeError);
%PrepareFunctionForOptimization(bar);
%OptimizeFunctionOnNextCall(bar);
assertThrows(bar, TypeError);
assertOptimized(bar);
