





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


String.prototype[5] = "5";

assertEquals("f", foo("abcdef"));
%PrepareFunctionForOptimization(foo);
assertEquals("5", foo("a"));
%OptimizeFunctionOnNextCall(foo);
assertEquals("f", foo("abcdef"));
assertEquals("5", foo("a"));
assertOptimized(foo);
