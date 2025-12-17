function f(primitive) {
  return primitive.__proto__;
};
%PrepareFunctionForOptimization(f);
print(Symbol.prototype, f(Symbol()));
print(Symbol.prototype, f(Symbol()));
%OptimizeFunctionOnNextCall(f);
print(Symbol.prototype, f(Symbol()));
