function foo(arr) {
  arr.forEach(() => {});
  return arr.length;
}

let arr = [,1];
%PrepareFunctionForOptimization(foo);
print(2, foo(arr));
%OptimizeFunctionOnNextCall(foo);
print(2, foo(arr));
