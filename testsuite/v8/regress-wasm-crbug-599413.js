





function __f_100() {
  "use asm";
  function __f_76() {
    var __v_39 = 0;
    outer: while (1) {
      while (__v_39 == 4294967295) {
      }
    }
  }
  return {__f_76: __f_76};
}
assertFalse(%IsAsmWasmCode(__f_100));
