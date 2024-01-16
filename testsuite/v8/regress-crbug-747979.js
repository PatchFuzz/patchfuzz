





function f(a) {
  %HeapObjectVerify(a);
  a[1] = 0;
  %HeapObjectVerify(a);
};
%PrepareFunctionForOptimization(f);
function foo() {}

var arr1 = [0];
var arr2 = [0];
var arr3 = [0];

arr1.f = foo;
arr1[0] = 4.2;

arr2.f = foo;

arr3.f = foo;
arr3[0] = 4.2;
arr3.f = f;

f(arr1);
f(arr2);
f(arr3);
%OptimizeFunctionOnNextCall(f);
f(arr3);
