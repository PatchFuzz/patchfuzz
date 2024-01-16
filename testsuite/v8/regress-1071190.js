






function test() {
  const a = new DataView(new ArrayBuffer(32));
  const b = new DataView(new ArrayBuffer(32));
  a.setFloat64(0);
  b.setFloat64(0, undefined);

  for(let i = 0; i < 8; ++i) {
    assertEquals(a.getUint8(i), b.getUint8(i));
  }
}

%PrepareFunctionForOptimization(test);
test();
test();
%OptimizeFunctionOnNextCall(test);
test();
