





function Module(stdlib, env, heap) {
  "use asm";
  var MEM = new stdlib.Int32Array(heap);
  function f() {
    MEM[0] = 0;
  }
  return { f: f };
}
function instantiate() {
  var buffer = new ArrayBuffer(4096);
  Module(this, {}, buffer).f();
  try {} finally {}
  gc();
  Module(this, {}, buffer).f();
}
instantiate();
assertTrue(%IsAsmWasmCode(Module));
