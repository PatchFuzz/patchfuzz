let memory = new WebAssembly.Memory({initial: 1});
let bytes = new Uint8Array(memory.buffer);

let module = wasmIntrinsicI8VecMul();
let instance = new WebAssembly.Instance(module, {
  "": {"memory": memory}
});
let {i8vecmul} = instance.exports;


{
  
  for (let i = 0; i < 4; i++) {
    bytes[i] = i;
    bytes[4 + i] = i * 2;
  }
  i8vecmul(
     8,
     0,
     4,
     4);
  for (let i = 0; i < 4; i++) {
    assertEq(bytes[8 + i], i * i * 2);
  }
}


{
  assertErrorMessage(() => i8vecmul(PageSizeInBytes - 1, 0, 0, 2), WebAssembly.RuntimeError, /index out of bounds/);
  assertErrorMessage(() => i8vecmul(0, PageSizeInBytes - 1, 0, 2), WebAssembly.RuntimeError, /index out of bounds/);
  assertErrorMessage(() => i8vecmul(0, 0, PageSizeInBytes - 1, 2), WebAssembly.RuntimeError, /index out of bounds/);
}
