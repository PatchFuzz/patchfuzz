




























var uint8 = new Uint8Array(1);

function test() {
  uint8[0] = 0x800000aa;
  assertEquals(0xaa, uint8[0]);
};
%PrepareFunctionForOptimization(test);
test();
test();
test();
%OptimizeFunctionOnNextCall(test);
test();

var uint32 = new Uint32Array(1);

function test2() {
  uint32[0] = 0x80123456789abcde;
  assertEquals(0x789ac000, uint32[0]);
};
%PrepareFunctionForOptimization(test2);
test2();
test2();
%OptimizeFunctionOnNextCall(test2);
test2();
