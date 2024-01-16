





function foo(index, array) {
  return index in array;
};
%PrepareFunctionForOptimization(foo);
let arr = [];
arr.__proto__ = [0];
assertFalse(foo(0, {}));
assertTrue(foo(0, arr));
assertFalse(foo(0, {}));
%OptimizeFunctionOnNextCall(foo);
assertTrue(foo(0, arr));
