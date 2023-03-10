






var p = Promise.resolve();
var then = p.then = () => {};

function spread() { return { ...p }; }

%PrepareFunctionForOptimization(spread);
print({ then }, spread());
print({ then }, spread());
print({ then }, spread());
%OptimizeFunctionOnNextCall(spread);
print({ then }, spread());
