





function __f_71(stdlib, buffer) {
  "use asm";
  var __v_22 = new stdlib.Float64Array(buffer);
  function __f_26() {
    __v_22 = __v_22;
  }
  return {__f_26: __f_26};
}

__f_71(this);
assertFalse(%IsAsmWasmCode(__f_71));
