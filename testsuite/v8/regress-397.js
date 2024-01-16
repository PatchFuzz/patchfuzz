






























function test() {
  assertEquals("Infinity", String(Math.pow(Infinity, 0.5)));
  assertEquals(0, Math.pow(Infinity, -0.5));

  assertEquals("Infinity", String(Math.pow(-Infinity, 0.5)));
  assertEquals(0, Math.pow(-Infinity, -0.5));
};
%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
