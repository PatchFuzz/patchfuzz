




























var foo = {bar: -2};
function crash() {
  return !foo.bar++;
};
%PrepareFunctionForOptimization(crash);
assertFalse(crash());
assertEquals(-1, foo.bar);
%OptimizeFunctionOnNextCall(crash);
assertFalse(crash());
assertEquals(0, foo.bar);
assertTrue(crash());
assertEquals(1, foo.bar);
assertFalse(crash());
assertEquals(2, foo.bar);
