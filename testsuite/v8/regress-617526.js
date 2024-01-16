







function __f_109() {
  "use asm";
  function __f_18() {
    var a = 0;
    while(2147483648) {
      a = 1;
      break;
    }
    return a|0;
  }
  return {__f_18: __f_18};
}

var wasm = __f_109();
assertTrue(%IsAsmWasmCode(__f_109));
assertEquals(1, wasm.__f_18());
