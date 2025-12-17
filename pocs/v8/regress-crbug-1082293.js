function f() {
  let buffer = new ArrayBuffer(8);
  let a32 = new Float32Array(buffer);
  let a8 = new Uint32Array(buffer);
  let a = { value: NaN };
  Object.defineProperty(a32, 0, { value: NaN });
  return a8[0];
}

let value = f();
%EnsureFeedbackVectorForFunction(f);
print(value, f());
