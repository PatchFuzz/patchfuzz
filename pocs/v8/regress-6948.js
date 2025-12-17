var o = {};

function foo(s) { return o[s]; }

%PrepareFunctionForOptimization(foo);
var s = 'c' + 'c';
foo(s);
foo(s);
%OptimizeFunctionOnNextCall(foo);
print(undefined, foo(s));
print(foo);
print(undefined, foo('c' + 'c'));
print(foo);
print(undefined, foo('ccddeeffgg'.slice(0, 2)));
print(foo);
