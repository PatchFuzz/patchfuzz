





function f() {}
var src = 'f(' + '0,'.repeat(0x201f) + ')';
var boom = new Function(src);
%PrepareFunctionForOptimization(boom);
%OptimizeFunctionOnNextCall(boom);
boom();
