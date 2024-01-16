





with ({}) {}
f = ({x}) => { };
%PrepareFunctionForOptimization(f);
%OptimizeFunctionOnNextCall(f);
f({});
