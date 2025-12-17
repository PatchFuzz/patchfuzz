let f = new Function("boom");

%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
print(f, ReferenceError);
