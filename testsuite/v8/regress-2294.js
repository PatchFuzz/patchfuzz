




























var clampedArray = new Uint8ClampedArray(10);

function test() {
  clampedArray[0] = 0.499;
  assertEquals(0, clampedArray[0]);
  clampedArray[0] = 0.5;
  assertEquals(0, clampedArray[0]);
  clampedArray[0] = 0.501;
  assertEquals(1, clampedArray[0]);
  clampedArray[0] = 1.499;
  assertEquals(1, clampedArray[0]);
  clampedArray[0] = 1.5;
  assertEquals(2, clampedArray[0]);
  clampedArray[0] = 1.501;
  assertEquals(2, clampedArray[0]);
  clampedArray[0] = 2.5;
  assertEquals(2, clampedArray[0]);
  clampedArray[0] = 3.5;
  assertEquals(4, clampedArray[0]);
  clampedArray[0] = 252.5;
  assertEquals(252, clampedArray[0]);
  clampedArray[0] = 253.5;
  assertEquals(254, clampedArray[0]);
  clampedArray[0] = 254.5;
  assertEquals(254, clampedArray[0]);
  clampedArray[0] = 256.5;
  assertEquals(255, clampedArray[0]);
  clampedArray[0] = -0.5;
  assertEquals(0, clampedArray[0]);
  clampedArray[0] = -1.5;
  assertEquals(0, clampedArray[0]);
  clampedArray[0] = 1000000000000;
  assertEquals(255, clampedArray[0]);
  clampedArray[0] = -1000000000000;
  assertEquals(0, clampedArray[0]);
};
%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
