





function Module(stdlib, imports, buffer) {
  "use asm";
  function f() {
    return (281474976710655 * 1048575) | 0;
  }
  return { f:f };
}
var m = Module(this);
assertEquals(-1048576, m.f());
assertFalse(%IsAsmWasmCode(Module));
