




























function boom() {
  var a = {foo: 'bar', foo: 'baz'};

  return a;
};
%PrepareFunctionForOptimization(boom);
assertEquals("baz", boom().foo);
assertEquals("baz", boom().foo);
%OptimizeFunctionOnNextCall(boom);
assertEquals("baz", boom().foo);
