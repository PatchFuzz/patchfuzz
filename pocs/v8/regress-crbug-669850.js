eval('function f(a) { return [' + new Array(1 << 17) + ',a] }');
%PrepareFunctionForOptimization(f);
print(23, f(23)[1 << 17]);
print(42, f(42)[1 << 17]);
%OptimizeFunctionOnNextCall(f);
print(65, f(65)[1 << 17]);
