




function Module() {
  "use asm";
  function f(i) {
    i = i | 0;
    switch (i | 0) {
      case 2:
        
        i = 0x1ffffffff;
        break;
    }
    return i | 0;
  }
  return f;
}
var f = Module();
assertEquals(0, f(0));
assertEquals(1, f(1));
assertEquals(-1, f(2));
assertFalse(%IsAsmWasmCode(Module));
