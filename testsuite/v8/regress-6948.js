





var o = {};

function foo(s) { return o[s]; }

%PrepareFunctionForOptimization(foo);
var s = 'c' + 'c';
foo(s);
foo(s);
%OptimizeFunctionOnNextCall(foo);
assertEquals(undefined, foo(s));
assertOptimized(foo);
assertEquals(undefined, foo('c' + 'c'));
assertOptimized(foo);
assertEquals(undefined, foo('ccddeeffgg'.slice(0, 2)));
assertOptimized(foo);
