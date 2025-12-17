function foo(index, array) {
  return index in array;
};
%PrepareFunctionForOptimization(foo);
let arr = [];
arr.__proto__ = [0];
print(foo(0, {}));
print(foo(0, arr));
print(foo(0, {}));
%OptimizeFunctionOnNextCall(foo);
print(foo(0, arr));
