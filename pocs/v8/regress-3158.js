Array.prototype[0] = 'a';
delete Array.prototype[0];

function foo(a, i) {
  return a[i];
};
%PrepareFunctionForOptimization(foo);
var a = new Array(100000);
a[3] = 'x';

foo(a, 3);
foo(a, 3);
foo(a, 3);
%OptimizeFunctionOnNextCall(foo);
foo(a, 3);
Array.prototype[0] = 'a';
var z = foo(a, 0);
print('a', z);
