function foo(a, b) {
  a.forEach(name => {
    b.push(name);
  });
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

%PrepareFunctionForOptimization(foo);
let arr2 = [];
foo(arr, arr2);
print(10, arr2.length);
arr2 = [];
foo(arr, arr2);
print(10, arr2.length);
%OptimizeMaglevOnNextCall(foo);
arr2 = [];
foo(arr, arr2);
print(10, arr2.length);
