





function foo(s) {
  return s[5];
}

%PrepareFunctionForOptimization(foo);
assertEquals("f", foo("abcdef"));
assertEquals(undefined, foo("a"));
%OptimizeFunctionOnNextCall(foo);
assertEquals("f", foo("abcdef"));
assertEquals(undefined, foo("a"));
assertOptimized(foo);


String.prototype.__proto__ = new Proxy(String.prototype.__proto__, {
  get(target, property) {
    return "5";
  }
});

assertEquals("f", foo("abcdef"));
%PrepareFunctionForOptimization(foo);
assertEquals("5", foo("a"));
%OptimizeFunctionOnNextCall(foo);
assertEquals("f", foo("abcdef"));
assertEquals("5", foo("a"));
assertOptimized(foo);
