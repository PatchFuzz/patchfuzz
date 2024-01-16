





function Module() {
  'use asm';
  function f() {}
  function g() {
    var x = 0.0;
    table[x & 3]();
  }
  var table = [f, f, f, f];
  return { g: g };
}
var m = Module();
assertDoesNotThrow(m.g);
assertFalse(%IsAsmWasmCode(Module));
