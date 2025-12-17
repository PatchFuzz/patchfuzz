function foo(o) { return %ToLength(o.length); }

%PrepareFunctionForOptimization(foo);
foo(new Array(4));
foo(new Array(Math.pow(2, 32) - 1));
foo({length: 10});
%OptimizeFunctionOnNextCall(foo);
foo({length: 10});
