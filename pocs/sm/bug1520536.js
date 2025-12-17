let a = wrapWithProto(new Int16Array([300]), {});
let b = new Uint8ClampedArray(a);
print(b[0], 255);
