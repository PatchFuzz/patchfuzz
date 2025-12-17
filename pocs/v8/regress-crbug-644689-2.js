for (var i = 0; i < 1024; ++i) Object.prototype["i" + i] = i;

function foo() {
  [1].pop();
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
