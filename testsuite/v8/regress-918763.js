





function C() {}
C.__proto__ = null;

function f(c) { return 0 instanceof c; }

%PrepareFunctionForOptimization(f);
f(C);
%OptimizeFunctionOnNextCall(f);
assertThrows(() => f(0));
