





function Module(stdlib, ffi, buffer) {
  "use asm";
  var MEM8 = new stdlib.Uint8Array(buffer);
  function foo() { return MEM8[0] | 0; }
  return { foo: foo };
}


function RunOnce() {
  let buffer = new ArrayBuffer(4096);
  let ffi = {};
  let stdlib = {Uint8Array: Uint8Array};
  let module = Module(stdlib, ffi, buffer);
  print(%IsAsmWasmCode(Module));
  print(0, module.foo());
}

(function RunTest() {
  for (let i = 0; i < 3000; i++) {
    RunOnce();
  }
})();
