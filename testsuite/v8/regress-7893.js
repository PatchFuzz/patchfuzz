





function Module(stdlib, imports, buffer) {
  "use asm";
  function f() {
    var bar = 0;
    return 0x1e+bar|0;
  }
  return f;
}
var f = Module(this);
assertTrue(%IsWasmCode(f));
assertTrue(%IsAsmWasmCode(Module));
assertEquals(0x1e, f());
