





function foo() {
  Array(-1);
};
%PrepareFunctionForOptimization(foo);
assertThrows(foo, RangeError);
assertThrows(foo, RangeError);
%OptimizeFunctionOnNextCall(foo);
assertThrows(foo, RangeError);
