function f() {}
f.prototype = 42;

function g(a) {
  a.stack;
}

%PrepareFunctionForOptimization(g);
Error.captureStackTrace(f);
g(f);
g(f);
g(f);
%OptimizeFunctionOnNextCall(g);
g(f);
