function getByteOffset(arr) {
  return arr.byteOffset;
}

%PrepareFunctionForOptimization(getByteOffset);

{
  let buffer = new ArrayBuffer(128, {maxByteLength: 1024});
  let arr = new Uint8Array(buffer, 64, 4);

  print(64, getByteOffset(arr));
  buffer.resize(0);
  print(0, getByteOffset(arr));
}

%OptimizeFunctionOnNextCall(getByteOffset);

{
  let buffer = new ArrayBuffer(128, {maxByteLength: 1024});
  let arr = new Uint8Array(buffer, 64, 4);

  print(64, getByteOffset(arr));
  buffer.resize(0);
  print(0, getByteOffset(arr));
}
