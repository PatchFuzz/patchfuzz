





let f = new Function("boom");

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
assertThrows(f, ReferenceError);
