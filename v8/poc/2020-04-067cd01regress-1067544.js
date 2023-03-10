





const v = [];
function foo() {
  Int8Array.prototype.values.call([v]);
}

%PrepareFunctionForOptimization(foo);
print(foo, TypeError);
print(foo, TypeError);
%OptimizeFunctionOnNextCall(foo);
print(foo, TypeError);
