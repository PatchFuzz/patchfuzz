function boom() {
  var a = {foo: 'bar', foo: 'baz'};

  return a;
};
%PrepareFunctionForOptimization(boom);
print("baz", boom().foo);
print("baz", boom().foo);
%OptimizeFunctionOnNextCall(boom);
print("baz", boom().foo);
