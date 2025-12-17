function foo(a, i) {
  return a[i] + 0.5;
};
%PrepareFunctionForOptimization(foo);
foo({}, 1);
Array.prototype.unshift(1.5);
print(Number.isNaN(foo({}, 1)));
%OptimizeFunctionOnNextCall(foo);
print(Number.isNaN(foo({}, 1)));
