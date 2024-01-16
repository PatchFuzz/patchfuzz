





eval('function f(a) { return [' + new Array(1 << 17) + ',a] }');
%PrepareFunctionForOptimization(f);
assertEquals(23, f(23)[1 << 17]);
assertEquals(42, f(42)[1 << 17]);
%OptimizeFunctionOnNextCall(f);
assertEquals(65, f(65)[1 << 17]);
