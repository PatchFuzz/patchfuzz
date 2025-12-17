(function TestReflectGetPrototypeOfOnPrimitive() {
  function f() {
    return Reflect.getPrototypeOf('');
  };
  %PrepareFunctionForOptimization(f);
  print(f, TypeError);
  print(f, TypeError);
  %OptimizeFunctionOnNextCall(f);
  print(f, TypeError);
})();

(function TestObjectGetPrototypeOfOnPrimitive() {
  function f() {
    return Object.getPrototypeOf('');
  };
  %PrepareFunctionForOptimization(f);
  print(String.prototype, f());
  print(String.prototype, f());
  %OptimizeFunctionOnNextCall(f);
  print(String.prototype, f());
})();

(function TestDunderProtoOnPrimitive() {
  function f() {
    return ''.__proto__;
  };
  %PrepareFunctionForOptimization(f);
  print(String.prototype, f());
  print(String.prototype, f());
  %OptimizeFunctionOnNextCall(f);
  print(String.prototype, f());
})();
