





for (var i = 0; i < 1024; ++i) Object.prototype["i" + i] = i;

function foo() {
  [].push(1);
};
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
