





(function TestReflectGetPrototypeOfOnPrimitive() {
  function f() {
    return Reflect.getPrototypeOf('');
  };
  %PrepareFunctionForOptimization(f);
  assertThrows(f, TypeError);
  assertThrows(f, TypeError);
  %OptimizeFunctionOnNextCall(f);
  assertThrows(f, TypeError);
})();

(function TestObjectGetPrototypeOfOnPrimitive() {
  function f() {
    return Object.getPrototypeOf('');
  };
  %PrepareFunctionForOptimization(f);
  assertSame(String.prototype, f());
  assertSame(String.prototype, f());
  %OptimizeFunctionOnNextCall(f);
  assertSame(String.prototype, f());
})();

(function TestDunderProtoOnPrimitive() {
  function f() {
    return ''.__proto__;
  };
  %PrepareFunctionForOptimization(f);
  assertSame(String.prototype, f());
  assertSame(String.prototype, f());
  %OptimizeFunctionOnNextCall(f);
  assertSame(String.prototype, f());
})();
