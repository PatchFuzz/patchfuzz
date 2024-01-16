





function test() {
  const ab = new ArrayBuffer(2996, { maxByteLength: 8588995 });
  const dv = new DataView(ab);
  const len = dv.byteLength;
  return len >= 255;
}

%PrepareFunctionForOptimization(test);
assertTrue(test());
assertTrue(test());
%OptimizeFunctionOnNextCall(test);
assertTrue(test());
assertOptimized(test);
