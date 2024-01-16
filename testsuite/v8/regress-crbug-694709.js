





function f(primitive) {
  return primitive.__proto__;
};
%PrepareFunctionForOptimization(f);
assertEquals(Symbol.prototype, f(Symbol()));
assertEquals(Symbol.prototype, f(Symbol()));
%OptimizeFunctionOnNextCall(f);
assertEquals(Symbol.prototype, f(Symbol()));
