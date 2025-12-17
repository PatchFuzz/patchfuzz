function test() {
  const ab = new ArrayBuffer(2996, { maxByteLength: 8588995 });
  const dv = new DataView(ab);
  const len = dv.byteLength;
  return len >= 255;
}

%PrepareFunctionForOptimization(test);
print(test());
print(test());
%OptimizeFunctionOnNextCall(test);
print(test());
print(test);
